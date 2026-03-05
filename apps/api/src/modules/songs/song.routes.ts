import { Router } from "express";
import { SongController } from "./song.controller";

const router: Router = Router();
const controller = new SongController();


router.get("/", controller.getSongs.bind(controller));
router.get("/:id", controller.getSongById.bind(controller));
router.post("/", controller.createSong.bind(controller));

export default router;