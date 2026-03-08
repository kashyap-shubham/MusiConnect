import { Router } from "express";
import { AlbumController } from "./album.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router: Router = Router();
const controller = new AlbumController();


router.get("/", asyncHandler(controller.getAlbums));

router.get("/:id", asyncHandler(controller.getAlbumById));

router.get("/:id/songs", asyncHandler(controller.getSongsByAlbumId));

router.post("/", asyncHandler(controller.createAlbum));

export default router;