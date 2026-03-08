import { Request, Response } from "express";
import { SongsService } from "./song.service";
import { createSongSchema } from "./schemas/create-song.schema";
import { updateSongSchema } from "./schemas/update-song.schema";
import { ApiError } from "@/errors/ApiError";

export class SongsController {
  private service = new SongsService();

  async getSongs(req: Request, res: Response) {
    const songs = await this.service.getAllSongs();

    return res.status(201).json({
      success: true,
      data: songs,
    });
  }

  async getSongById(req: Request, res: Response) {
    // todo => here two db queries are done so later reduce it
    const { id } = req.params as { id: string };

    const song = await this.service.getSongById(id);

    if (!song) {
      throw new ApiError(404, "Song not found");
    }

    return res.status(201).json({
      success: true,
      data: song,
    });
  }

  async createSong(req: Request, res: Response) {
    const data = createSongSchema.parse(req.body);

    const song = await this.service.createSong(data);

    return res.status(201).json({
      success: true,
      data: song,
    });
  }

  async updateSong(req: Request, res: Response) {
    // todo => here two db queries are done so later reduce it
    const { id } = req.params as { id: string };

    const existingSong = await this.service.getSongById(id);

    if (!existingSong) {
      throw new ApiError(404, "Song not found");
    }

    const data = updateSongSchema.parse(req.body);

    const song = await this.service.updateSong(id, data);

    return res.status(201).json({
      success: true,
      data: song,
    });
  }

  async deleteSong(req: Request, res: Response) {
    // todo => here two db queries are done so later reduce it
    const { id } = req.params as { id: string };

    const existingSong = await this.service.getSongById(id);

    if (!existingSong) {
      throw new ApiError(404, "Song not Found");
    }

    await this.service.deleteSong(id);

    return res.status(201).json({
      success: true,
      message: "Song deleted",
    });
  }
}
