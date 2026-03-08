import { Router } from "express";
import { UserController } from "./users.controller";
import { asyncHandler } from "@/utils/asyncHandler";



const router: Router = Router();
const controller = new UserController();


router.get("/me", asyncHandler(controller.getCurrentUser as any)); //todo => need to refractor type from any to global typesafe

router.get("/:id/playlists", asyncHandler(controller.getUserPlaylists));


export default router;