import { Router } from "express";
import { SongsController } from "./songs.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const songRouter:Router = Router();
const Songcontroller = new SongsController();


songRouter.get("/", asyncHandler(Songcontroller.getSongs.bind(Songcontroller)));

songRouter.get("/:id", asyncHandler(Songcontroller.getSongById.bind(Songcontroller)));

songRouter.post("/", asyncHandler(Songcontroller.createSong.bind(Songcontroller)));

songRouter.patch("/:id", asyncHandler(Songcontroller.updateSong.bind(Songcontroller)));

songRouter.delete("/:id", asyncHandler(Songcontroller.deleteSong.bind(Songcontroller)));

export default songRouter;