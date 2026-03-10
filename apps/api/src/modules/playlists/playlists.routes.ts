import { Router } from "express";
import { PlaylistController } from "./playlists.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const playlistRouter: Router = Router();
const playlistController = new PlaylistController();


playlistRouter.get("/", asyncHandler(playlistController.getUserPlaylists));

playlistRouter.get("/:id", asyncHandler(playlistController.getPlaylistById));

playlistRouter.post("/", asyncHandler(playlistController.createPlaylist));

playlistRouter.post("/:id/songs", asyncHandler(playlistController.addSongToPlaylist));

playlistRouter.delete(
  "/:playlistId/songs/:songId",
  asyncHandler(playlistController.removeSongFromPlaylist),
);

export default playlistRouter;
