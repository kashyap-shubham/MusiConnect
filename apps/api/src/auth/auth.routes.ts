import { Router } from "express";
import passport from "./passport";
import { env } from "@/config/env";
import { requireAuth } from "@/middleware/requireAuth";
import { asyncHandler } from "@/utils/asyncHandler";
import { ApiError } from "@/errors/ApiError";
import { prisma } from "@/lib/prisma";

const authRouter:Router = Router();

// limit no of devices per user
const MAX_DEVICES = 3;


/**
 * Start Google OAuth
 */
authRouter.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "login",
    accessType: "offline",
  })
);


/**
 * Google OAuth callback
 */
authRouter.get("/google/callback", passport.authenticate("google", {
    failureRedirect: `${env.FRONTEND_URL}/signin`,
  }),
  
  async (req, res, next) => {

    try {
      
      const user = req.user;
      if (!user) {
        return next(new ApiError(401, "Authentication failed"));
      }

      // check active session before creating new one 
      const activeSession = await prisma.session.findMany({
        where: {
          userId: user.id,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

      if (activeSession.length >= MAX_DEVICES) {
        // block login
        return res.redirect(`${env.FRONTEND_URL}/signin?error=device_limit`);
      }

      // regenrate session id
      req.session.regenerate(async err => {
  
        if (err) {
          return next(err);
        }
        
        req.login(user, async err => {

          if (err) {
            return next(err);
          }
    
          // enforece device limtit and if reached then delete last session
          // const existingSessions = await prisma.session.findMany({
          //   where: {userId: user.id},
          //   orderBy: {
          //     createdAt: "asc",
          //   },
          // });
    
          // if (existingSessions.length >= MAX_DEVICES) {
          //   const sessionsToDelete = existingSessions.slice(0, existingSessions.length - MAX_DEVICES + 1);
    
          //   await prisma.session.deleteMany({
          //     where: {
          //       id: {
          //         in: sessionsToDelete.map(s => s.id),
          //       },
          //     },
          //   });
          // }
    
          // store device session
          await prisma.session.create({
            data: {
              userId: user.id,
              sessionId: req.sessionID,
              userAgent: req.headers["user-agent"],
              ip: req.ip,
              expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            },
          });
    
          res.redirect(`${env.FRONTEND_URL}/explore`);
        });

      });

    } catch (err) {
        next(err);
    }
    
  }
);

/**
 * Get current user
 */
authRouter.get(
  "/me",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.json({
      success: true,
      data: req.user,
    });
  })
);

/**
 * Logout
 */
authRouter.post("/logout", requireAuth, asyncHandler(async (req, res) => {

    // delete session when logout
    await prisma.session.deleteMany({
      where: {sessionId: req.sessionID},
    });

    await new Promise<void>((resolve, reject) => {
      req.logout((err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    req.session.destroy((err) => {
      if (err) {
        throw new ApiError(500, "Logout failed");
      }
      res.clearCookie("connect.sid", {
        httpOnly: true,
        sameSite: "lax",
        secure: env.NODE_ENV === "production",
        path: "/",
      });

      res.json({
        success: true,
        data: null,
      });
    });

  })
);

export default authRouter;