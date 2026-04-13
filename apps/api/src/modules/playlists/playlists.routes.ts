import { Router } from "express";
import { PlaylistController } from "./playlists.controller";
import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";
import { createPlaylistSchema } from "./schemas/create-playlist.schema";
import { addSongToPlaylistSchema } from "./schemas/add-song-to-playlist.schema";


const playlistRouter: Router = Router();

const playlistController = new PlaylistController();


playlistRouter.get("/", requireAuth, asyncHandler(playlistController.getUserPlaylists));

playlistRouter.get("/:id", requireAuth, asyncHandler(playlistController.getPlaylistById));

playlistRouter.post("/", requireAuth, validate(createPlaylistSchema), asyncHandler(playlistController.createPlaylist));

playlistRouter.post("/:playlistId/songs", requireAuth, validate(addSongToPlaylistSchema), asyncHandler(playlistController.addSongToPlaylist));

playlistRouter.delete("/:playlistId/songs/:songId", requireAuth, asyncHandler(playlistController.removeSongFromPlaylist));

export default playlistRouter;
