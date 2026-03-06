import { Router } from "express";
import { ArtistController } from "./artist.controller";

const router:Router = Router();
const controller = new ArtistController();

router.get("/", controller.getAll.bind(controller));
router.get("/:id", controller.getById.bind(controller));
router.post("/", controller.create.bind(controller));
router.get("/:id/songs", controller.getSongs.bind(controller));
router.get("/:id/albums", controller.getAlbumsByArtistId.bind(controller));

export default router;