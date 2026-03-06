import { Router } from "express";
import { SongsController } from "./song.controller";

const router:Router = Router();
const controller = new SongsController();

router.get("/", controller.getSongs.bind(controller));
router.get("/:id", controller.getSongById.bind(controller));

router.post("/", controller.createSong.bind(controller));

router.patch("/:id", controller.updateSong.bind(controller));

router.delete("/:id", controller.deleteSong.bind(controller));

export default router;