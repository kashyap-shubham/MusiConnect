import { Router } from "express";
import { PlaylistController } from "./playlists.controller";
import { asyncHandler } from "@/utils/asyncHandler";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";
import { createPlaylistSchema } from "./schemas/create-playlist.schema";
import { addSongToPlaylistSchema } from "./schemas/add-song-to-playlist.schema";
import { removeSongFromPlaylistSchema } from "./schemas/remove-song-from-playlist.schema";
import { deletePlaylistSchema } from "./schemas/delete-playlist.schema";


const playlistRouter: Router = Router();

const playlistController = new PlaylistController();

// create playlist
playlistRouter.post("/", requireAuth, validate(createPlaylistSchema), asyncHandler(playlistController.createPlaylist));

// get all playlist of current user
playlistRouter.get("/", requireAuth, asyncHandler(playlistController.getUserPlaylists)); // Todo => pagination is optional

// get particular playlist details
playlistRouter.get("/:playlistId", requireAuth, asyncHandler(playlistController.getPlaylistById));  // Todo => pagination is optional

// add songs to the playlist
playlistRouter.post("/:playlistId/songs", requireAuth, validate(addSongToPlaylistSchema), asyncHandler(playlistController.addSongToPlaylist));

// delete song from the playlist 
playlistRouter.delete("/:playlistId/songs/:songId", requireAuth, validate(removeSongFromPlaylistSchema), asyncHandler(playlistController.removeSongFromPlaylist));

// delete playlist
playlistRouter.delete("/:playlistId", requireAuth, validate(deletePlaylistSchema), asyncHandler(playlistController.deletePlaylist));


export default playlistRouter;
