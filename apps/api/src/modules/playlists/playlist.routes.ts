import { Router } from "express";
import { PlaylistController } from "./playlist.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router: Router = Router();
const playlistController = new PlaylistController();


router.get("/", asyncHandler(playlistController.getUserPlaylists));

router.get("/:id", asyncHandler(playlistController.getPlaylistById));

router.post("/", asyncHandler(playlistController.createPlaylist));

router.post("/:id/songs", asyncHandler(playlistController.addSongToPlaylist));

router.delete(
  "/:playlistId/songs/:songId",
  asyncHandler(playlistController.removeSongFromPlaylist),
);

export default router;
