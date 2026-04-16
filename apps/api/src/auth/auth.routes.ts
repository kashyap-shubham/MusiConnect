import { Router } from "express";
import passport from "./passport";
import { env } from "@/config/env";
import { requireAuth } from "@/middleware/requireAuth";
import { asyncHandler } from "@/utils/asyncHandler";
import { ApiError } from "@/errors/ApiError";

const authRouter:Router = Router();

/**
 * Start Google OAuth
 */
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "login",
    accessType: "offline",
  })
);

/**
 * Google OAuth callback
 */
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${env.FRONTEND_URL}/signin`,
  }),
  (req, res, next) => {

    const user = req.user;
    if (!user) {
      return next(new ApiError(401, "Authentication failed"));
    }
    req.session.regenerate(err => {
      if (err) {
        return next(err);
      }
      req.login(user, err => {
        if (err) {
          return next(err);
        }
        res.redirect(`${env.FRONTEND_URL}/explore`);
      });
    });
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
authRouter.post(
  "/logout",
  requireAuth,
  asyncHandler(async (req, res) => {
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