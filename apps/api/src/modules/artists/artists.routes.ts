import { Router } from "express";

import { ArtistController } from "./artists.controller";

import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";

import { createArtistSchema } from "./schemas/create-artist.schema";
import { updateArtistSchema } from "./schemas/update-artist.schema";
import { artistIdParamSchema } from "./schemas/artist-param.schema";
import { paginationQuerySchema } from "@/utils/pagination.schema";


const artistRouter: Router = Router();

const artistController = new ArtistController();

// get all artists
artistRouter.get("/", validate(paginationQuerySchema), asyncHandler(artistController.getAll));

// get artist by id
artistRouter.get("/:artistId", validate(artistIdParamSchema), asyncHandler(artistController.getById));

// get artist's song
artistRouter.get("/:artistId/songs", validate(artistIdParamSchema), asyncHandler(artistController.getSongsByArtistId)); //Todo => needs to add song meta data mapper here and in albums and playlist and songs etc.

// get artist's albums
artistRouter.get("/:artistId/albums", validate(artistIdParamSchema), asyncHandler(artistController.getAlbumsByArtistId));

// create artist
artistRouter.post("/", requireAuth, validate(createArtistSchema), asyncHandler(artistController.create));

// update artist
artistRouter.patch("/:artistId", requireAuth, validate(updateArtistSchema), asyncHandler(artistController.update));

// delete artist
artistRouter.delete("/:artistId", requireAuth, validate(artistIdParamSchema), asyncHandler(artistController.delete));


export default artistRouter;