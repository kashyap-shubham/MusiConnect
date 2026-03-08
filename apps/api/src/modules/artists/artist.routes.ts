import { Router } from "express";
import { ArtistController } from "./artist.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const router: Router = Router();
const controller = new ArtistController();


router.get("/", asyncHandler(controller.getAll.bind(controller)));

router.get("/:id", asyncHandler(controller.getById.bind(controller)));

router.post("/", asyncHandler(controller.create.bind(controller)));

router.get("/:id/songs", asyncHandler(controller.getSongs.bind(controller)));

router.get(
  "/:id/albums",
  asyncHandler(controller.getAlbumsByArtistId.bind(controller)),
);

export default router;
