import { Router } from "express";
import { UserController } from "./users.controller";
import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";



const userRouter: Router = Router();
const controller = new UserController();


userRouter.get("/me", requireAuth, asyncHandler(controller.getCurrentUser));

userRouter.get("/me/playlists", requireAuth, asyncHandler(controller.getCurrentUserPlaylists));


export default userRouter;