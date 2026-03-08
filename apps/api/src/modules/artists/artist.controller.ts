import { Request, Response } from "express";
import { ArtistService } from "./artist.service";
import { createArtistSchema } from "./schemas/create-artist.schema";
import { CreateArtistInput } from "./schemas/create-artist.schema";
import { ApiError } from "@/errors/ApiError";

export class ArtistController {
  private service: ArtistService;

  constructor() {
    this.service = new ArtistService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const artists = await this.service.getAllArtist();

    res.status(200).json({
      success: true,
      data: artists,
    });
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    const artist = await this.service.getArtistById(id);

    if (!artist) {
      throw new ApiError(404, "Artist not found");
    }

    res.status(200).json({
      success: true,
      data: artist,
    });
  }

  async create(
    req: Request<{}, {}, CreateArtistInput>,
    res: Response,
  ): Promise<void> {
    const parsed = createArtistSchema.parse(req.body);

    const artist = await this.service.createArtist(parsed);

    res.status(201).json({
      success: true,
      data: artist,
    });
  }

  async getSongs(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    const songs = await this.service.getArtistSongs(id);

    res.status(200).json({
      success: true,
      data: songs,
    });
  }

  async getAlbumsByArtistId(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };

    const albums = await this.service.getAlbumsByArtistId(id);

    res.status(200).json({
      success: true,
      data: albums,
    });
  }
}
