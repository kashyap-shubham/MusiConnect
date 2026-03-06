import { Request, Response } from "express";
import { SongsService } from "./song.service";
import { createSongSchema } from "./schemas/create-song.schema";
import { updateSongSchema } from "./schemas/update-song.schema";

type SongParams = {
  id: string;
};

export class SongsController {
  private service = new SongsService();

  async getSongs(req: Request, res: Response) {
    try {
      const songs = await this.service.getAllSongs();

      return res.json({
        success: true,
        data: songs,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Failed to fetch songs",
      });
    }
  }

  async getSongById(req: Request<SongParams>, res: Response) {
    try {
      const { id } = req.params;

      const song = await this.service.getSongById(id);

      return res.json({
        success: true,
        data: song,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Failed to fetch song",
      });
    }
  }

  async createSong(req: Request, res: Response) {
    try {
      const data = createSongSchema.parse(req.body);

      const song = await this.service.createSong(data);

      return res.status(201).json({
        success: true,
        data: song,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "Invalid request",
      });
    }
  }

  async updateSong(req: Request<SongParams>, res: Response) {
    try {
      const { id } = req.params;

      const data = updateSongSchema.parse(req.body);

      const song = await this.service.updateSong(id, data);

      return res.json({
        success: true,
        data: song,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "Invalid request",
      });
    }
  }

  async deleteSong(req: Request<SongParams>, res: Response) {
    try {
      const { id } = req.params;

      await this.service.deleteSong(id);

      return res.json({
        success: true,
        message: "Song deleted",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Failed to delete song",
      });
    }
  }
}