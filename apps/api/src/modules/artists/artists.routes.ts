import { Router } from "express";

import { ArtistController } from "./artists.controller";

import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";

import { createArtistSchema } from "./schemas/create-artist.schema";
import { updateArtistSchema } from "./schemas/update-artist.schema";
import { artistIdParamSchema } from "./schemas/artist-param.schema";


const artistRouter: Router = Router();

const controller = new ArtistController();

// get all artists
artistRouter.get("/", asyncHandler(controller.getAll));

// get artist by id
artistRouter.get("/:artistId", validate(artistIdParamSchema), asyncHandler(controller.getById));

// get artist's song
artistRouter.get("/:artistId/songs", validate(artistIdParamSchema), asyncHandler(controller.getSongsByArtistId));

// get artist's albums
artistRouter.get("/:artistId/albums", validate(artistIdParamSchema), asyncHandler(controller.getAlbumsByArtistId));

// create artist
artistRouter.post("/", requireAuth, validate(createArtistSchema), asyncHandler(controller.create));

// update artist
artistRouter.patch("/:artistId", requireAuth, validate(updateArtistSchema), asyncHandler(controller.update));

// delete artist
artistRouter.delete("/:artistId", requireAuth, validate(artistIdParamSchema), asyncHandler(controller.delete));


export default artistRouter;