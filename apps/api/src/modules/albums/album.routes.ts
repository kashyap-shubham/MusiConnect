import { Router } from "express";
import { AlbumController } from "./album.controller";

const router: Router = Router();

const controller = new AlbumController();

router.get("/", controller.getAlbums);

router.get("/:id", controller.getAlbumById.bind(controller));

router.get("/:id/songs", controller.getSongsByAlbumId.bind(controller));

router.post("/", controller.createAlbum.bind(controller));

export default router;