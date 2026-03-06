import type { Request, Response } from "express";
import { AlbumService } from "./album.service";
import { createAlbumSchema } from "./schemas/create-album.schema";

type AlbumParams = {
  id: string;
};

export class AlbumController {
  private albumService: AlbumService;

  constructor() {
    this.albumService = new AlbumService();
  }

  createAlbum = async (req: Request, res: Response) => {
    try {
      const validatedData = createAlbumSchema.parse(req.body);

      const album = await this.albumService.createAlbum(validatedData);

      return res.status(201).json(album);
    } catch (error) {
      console.error("Create album error:", error);

      return res.status(400).json({
        message: "Invalid request",
      });
    }
  };

  getAlbums = async (_req: Request, res: Response) => {
    const albums = await this.albumService.getAlbums();

    return res.json(albums);
  };

  getAlbumById = async (
    req: Request<AlbumParams>,
    res: Response
  ) => {
    const { id } = req.params;

    const album = await this.albumService.getAlbumById(id);

    if (!album) {
      return res.status(404).json({
        message: "Album not found",
      });
    }

    return res.json(album);
  };

  getSongsByAlbumId = async (
    req: Request<AlbumParams>,
    res: Response
  ) => {
    const { id } = req.params;

    const songs = await this.albumService.getSongsByAlbumId(id);

    return res.json(songs);
  };
}