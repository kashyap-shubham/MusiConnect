import { NextFunction, Request, Response } from "express";
import { SongService } from "./song.service";



export class SongController {
    private service = new SongService();

    constructor() {
        this.service = new SongService
    }

    async getSongs(req: Request, res: Response, next: NextFunction) {
        try {
            const songs = await this.service.getAllSong();
            res.status(200).json(songs);

        } catch (error) {
            next(error);
        }
    }


    async getSongById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const song = await this.service.getSongById(id); 

            res.status(200).json(song);

        } catch (error) {
            next(error) 
        }
    }
}