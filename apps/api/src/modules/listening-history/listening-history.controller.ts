import { Request, Response } from "express";
import { ListeningHistoryService } from "./listening-history.service";



export class ListeningHistoryController {

    private liteningHistoryService: ListeningHistoryService;

    constructor() {
        this.liteningHistoryService = new ListeningHistoryService();
    }


    trackPlay = async (req: Request, res: Response) => {
        const userId = req.user!.id;

        await this.liteningHistoryService.trackPlay(userId, req.body);

        return res.status(201).json({
            success: true,
            data: []
        });
    };


    getRecentSongs = async (req: Request, res: Response) => {

        const userId = req.user!.id;

        const songs = await this.liteningHistoryService.getRecentSongs(userId);


        return res.status(200).json({
            success: true,
            data: songs
        });
    };
}