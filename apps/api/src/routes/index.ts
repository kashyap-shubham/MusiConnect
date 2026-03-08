import { Router } from "express";

import songRoutes from "@/modules/songs/songs.routes";
import artistRoutes from "@/modules/artists/artists.routes";
import albumRoutes from "@/modules/albums/albums.routes";
import playlistRoutes from "@/modules/playlists/playlists.routes";
import userRoutes from "@/modules/users/users.routes";

const router: Router = Router();

router.use("/songs", songRoutes);
router.use("/artists", artistRoutes);
router.use("/albums", albumRoutes);
router.use("/playlists", playlistRoutes);
router.use("/users", userRoutes);

export default router;