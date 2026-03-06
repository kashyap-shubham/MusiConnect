import { Router } from "express";

import songRoutes from "../modules/songs/song.routes";
import artistRoutes from "../modules/artists/artist.routes";
import albumRoutes from "../modules/albums/album.routes";

const router: Router = Router();

router.use("/songs", songRoutes);
router.use("/artists", artistRoutes);
router.use("/albums", albumRoutes);

export default router;