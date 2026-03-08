import type { Request, Response } from "express";
import { AlbumService } from "./albums.service";
import { createAlbumSchema } from "./schemas/create-album.schema";
import { ApiError } from "@/errors/ApiError";

export class AlbumController {
  private albumService: AlbumService;

  constructor() {
    this.albumService = new AlbumService();
  }

  createAlbum = async (req: Request, res: Response) => {
    const validatedData = createAlbumSchema.parse(req.body);

    const album = await this.albumService.createAlbum(validatedData);

    return res.status(201).json({
      success: true,
      data: album,
    });
  };

  getAlbums = async (req: Request, res: Response) => {
    const albums = await this.albumService.getAlbums();

    return res.status(200).json({
      success: true,
      data: albums,
    });
  };

  getAlbumById = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const album = await this.albumService.getAlbumById(id);

    if (!album) {
      throw new ApiError(404, "Album Not Found");
    }

    return res.status(200).json({
      success: true,
      data: album,
    });
  };

  getSongsByAlbumId = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const songs = await this.albumService.getSongsByAlbumId(id);

    return res.status(200).json({
      success: true,
      data: songs,
    });
  };
}
