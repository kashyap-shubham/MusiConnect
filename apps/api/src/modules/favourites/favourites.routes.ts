import { Router } from "express";
import { requireAuth } from "@/middleware/requireAuth";
import { asyncHandler } from "@/utils/asyncHandler";
import { validate } from "@/middleware/validate";
import { FavouriteController } from "./favourites.controller";
import { toggleFavouriteSchema } from "./schemas/toggle-favourite.scheam";


const favouriteRouter: Router = Router();

const favouriteController = new FavouriteController();


favouriteRouter.post("/", requireAuth, validate(toggleFavouriteSchema), asyncHandler(favouriteController.toggleFavourite));


favouriteRouter.get("/songs", requireAuth, asyncHandler(favouriteController.getLikedSongs));


export default favouriteRouter;
