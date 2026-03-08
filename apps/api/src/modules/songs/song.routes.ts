import { Router } from "express";
import { SongsController } from "./song.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router:Router = Router();
const Songcontroller = new SongsController();


router.get("/", asyncHandler(Songcontroller.getSongs.bind(Songcontroller)));

router.get("/:id", asyncHandler(Songcontroller.getSongById.bind(Songcontroller)));

router.post("/", asyncHandler(Songcontroller.createSong.bind(Songcontroller)));

router.patch("/:id", asyncHandler(Songcontroller.updateSong.bind(Songcontroller)));

router.delete("/:id", asyncHandler(Songcontroller.deleteSong.bind(Songcontroller)));

export default router;