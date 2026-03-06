import { Router } from "express";
import { AlbumController } from "./album.controller";

const router: Router = Router();

const albumController = new AlbumController();

router.get("/", albumController.getAlbums);

router.get("/:id", albumController.getAlbumById);

router.get("/:id/songs", albumController.getSongsByAlbumId);

router.post("/", albumController.createAlbum);

export default router;