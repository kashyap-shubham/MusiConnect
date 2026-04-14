import { Router } from "express";
import { SongsController } from "./songs.controller";
import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";
import { createSongSchema } from "./schemas/create-song.schema";
import { updateSongSchema } from "./schemas/update-song.schema";
import { songIdParamSchema } from "./schemas/song-param.schema";
import { paginationQuerySchema } from "@/utils/pagination.schema";

const songRouter:Router = Router();
const songController = new SongsController();


// get all songs list
songRouter.get("/", validate(paginationQuerySchema), asyncHandler(songController.getSongs));

// get song by id
songRouter.get("/:id", validate(songIdParamSchema), asyncHandler(songController.getSongById));

// create song endpoint 
songRouter.post("/", requireAuth, validate(createSongSchema), asyncHandler(songController.createSong));

// update song metadata
songRouter.patch("/:id", requireAuth, validate(updateSongSchema), asyncHandler(songController.updateSong));

// delete song and metadata
songRouter.delete("/:id", requireAuth, validate(songIdParamSchema), asyncHandler(songController.deleteSong));


export default songRouter;