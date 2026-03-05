import { Router } from "express";
import songRoutes from "../modules/songs/song.routes";


const router: Router = Router();

router.use("/songs", songRoutes);


export default router;