import { Router } from "express";
import { ListeningHistoryController } from "./listening-history.controller";
import { requireAuth } from "@/middleware/requireAuth";
import { validate } from "@/middleware/validate";
import { trackPlaySchema } from "./schemas/track-play.schema";
import { asyncHandler } from "@/utils/asyncHandler";



const listeningHistoryRouter: Router = Router();

const listeningHistoryController = new ListeningHistoryController();


// track play event
listeningHistoryRouter.post("/history", requireAuth, validate(trackPlaySchema), asyncHandler(listeningHistoryController.trackPlay));


// get recent played songs
listeningHistoryRouter.get("/recent", requireAuth, asyncHandler(listeningHistoryController.getRecentSongs));


export default listeningHistoryRouter;