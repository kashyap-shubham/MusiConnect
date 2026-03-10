import { Router } from "express";
import { UserController } from "./users.controller";
import { asyncHandler } from "@/utils/asyncHandler";



const userRouter: Router = Router();
const controller = new UserController();


userRouter.get("/me", asyncHandler(controller.getCurrentUser as any)); //todo => need to refractor type from any to global typesafe

userRouter.get("/:id/playlists", asyncHandler(controller.getUserPlaylists));


export default userRouter;