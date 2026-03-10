import { Router } from "express";
import passport from "./passport";

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
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/songs");
  }
);

/**
 * Get current user
 */
authRouter.get("/me", (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Not authenticated",
    });
  }

  res.json({
    success: true,
    data: req.user,
  });
});

/**
 * Logout
 */
authRouter.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Logout failed",
      });
    }

    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({
        success: true,
        message: "Logged out",
      });
    });
  });
});

export default authRouter;