import albumRouter from "@/modules/albums/albums.routes";
import artistRouter from "@/modules/artists/artists.routes";
import playlistRouter from "@/modules/playlists/playlists.routes";
import songRouter from "@/modules/songs/songs.routes";
import userRouter from "@/modules/users/users.routes";
import { Router } from "express";


const router: Router = Router();

router.use("/songs", songRouter);
router.use("/artists", artistRouter);
router.use("/albums", albumRouter);
router.use("/playlists", playlistRouter);
router.use("/users", userRouter);

export default router;