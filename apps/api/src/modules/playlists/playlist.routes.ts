import { Router } from "express";
import { PlaylistController } from "./playlist.controller";

const router: Router = Router();

const playlistController = new PlaylistController();

router.post("/", playlistController.createPlaylist);

router.get("/:id", playlistController.getPlaylistById);

router.get("/", playlistController.getUserPlaylists);

router.post("/:id/songs", playlistController.addSongToPlaylist);

router.delete(
  "/:playlistId/songs/:songId",
  playlistController.removeSongFromPlaylist
);

export default router;