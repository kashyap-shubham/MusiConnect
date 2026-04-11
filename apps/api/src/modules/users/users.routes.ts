import { Router } from "express";
import { UserController } from "./users.controller";
import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";



const userRouter: Router = Router();
const controller = new UserController();


userRouter.get("/me", requireAuth, asyncHandler(controller.getCurrentUser)); //todo => need to refractor type from any to global typesafe

userRouter.get("/:id/playlists", requireAuth, asyncHandler(controller.getUserPlaylists));


export default userRouter;