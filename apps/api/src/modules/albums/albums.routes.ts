import { Router } from "express";
import { AlbumController } from "./albums.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const albumRouter: Router = Router();
const controller = new AlbumController();


albumRouter.get("/", asyncHandler(controller.getAlbums));

albumRouter.get("/:id", asyncHandler(controller.getAlbumById));

albumRouter.get("/:id/songs", asyncHandler(controller.getSongsByAlbumId));

albumRouter.post("/", asyncHandler(controller.createAlbum));

export default albumRouter;