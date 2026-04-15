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
  })
);

/**
 * Google OAuth callback
 */
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${env.FRONTEND_URL}/login`,
  }),
  (_req, res) => {
    res.redirect(`${env.FRONTEND_URL}/explore`);
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
        throw new ApiError(401, err.message);
      }
      res.clearCookie("connect.sid", {
        httpOnly: true,
        sameSite: "lax",
        secure: env.NODE_ENV === "production",
      });

      res.json({
        success: true,
        data: null,
      });
    });

  })
);

export default authRouter;