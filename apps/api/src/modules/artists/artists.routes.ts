import { Router } from "express";
import { ArtistController } from "./artists.controller";
import { asyncHandler } from "@/utils/asyncHandler";

const artistRouter: Router = Router();
const controller = new ArtistController();


artistRouter.get("/", asyncHandler(controller.getAll.bind(controller)));

artistRouter.get("/:id", asyncHandler(controller.getById.bind(controller)));

artistRouter.post("/", asyncHandler(controller.create.bind(controller)));

artistRouter.get("/:id/songs", asyncHandler(controller.getSongs.bind(controller)));

artistRouter.get(
  "/:id/albums",
  asyncHandler(controller.getAlbumsByArtistId.bind(controller)),
);

export default artistRouter;
