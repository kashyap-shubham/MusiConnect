import { Router } from "express";

import authRouter from "@/auth/auth.routes";
import userRouter from "@/modules/users/users.routes";

import artistRouter from "@/modules/artists/artists.routes";
import albumRouter from "@/modules/albums/albums.routes";
import songRouter from "@/modules/songs/songs.routes";

import playlistRouter from "@/modules/playlists/playlists.routes";
import listeningHistoryRouter from "@/modules/listening-history/listening-history.routes";

const router: Router = Router();

// Auth & User Routes
router.use("/auth", authRouter);
router.use("/users", userRouter);

// Music Catalog Routes
router.use("/artists", artistRouter);
router.use("/albums", albumRouter);
router.use("/songs", songRouter);

// User Library Routes
router.use("/playlists", playlistRouter);

// ListeningHistory Routes
router.use("/songs", listeningHistoryRouter)

export default router;