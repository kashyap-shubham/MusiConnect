import { Router } from "express";

import { AlbumController } from "./albums.controller";

import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";

import { createAlbumSchema } from "./schemas/create-album.schema";
import { updateAlbumSchema } from "./schemas/update-album.schema";
import { albumIdParamSchema } from "./schemas/album-param.schema";


const albumRouter: Router = Router();

const controller = new AlbumController();


// get all the albums
albumRouter.get("/", asyncHandler(controller.getAlbums));


// get album by id
albumRouter.get("/:id", validate(albumIdParamSchema), asyncHandler(controller.getAlbumById));


// get album's song
albumRouter.get("/:id/songs", validate(albumIdParamSchema), asyncHandler(controller.getSongsByAlbumId));


// create album
albumRouter.post("/", requireAuth, validate(createAlbumSchema), asyncHandler(controller.createAlbum));


// update album
albumRouter.patch("/:id", requireAuth, validate(updateAlbumSchema), asyncHandler(controller.updateAlbum));


// delete album
albumRouter.delete("/:id", requireAuth, validate(albumIdParamSchema), asyncHandler(controller.deleteAlbum));


export default albumRouter;