import { NextFunction, Request, Response } from "express";
import { SongService } from "./song.service";
import { createSongSchema } from "./schemas/create-song.schema";



export class SongController {
    private service:  SongService;

    constructor() {
        this.service = new SongService();
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


    async createSong(req: Request, res: Response) {
        const parsed = createSongSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({
                message: "Invalid request",
                errors: parsed.error.flatten(),
            });
        }

        const song = await this.service.createSong(parsed.data);

        return res.status(201).json({
            message: "Song created successfully",
            data: song,
        });
    }
}