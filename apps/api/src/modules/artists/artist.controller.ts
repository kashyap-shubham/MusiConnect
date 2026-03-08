import { Request, Response } from "express";
import { ArtistService } from "./artist.service";
import { createArtistSchema } from "./schemas/create-artist.schema";
import { CreateArtistInput } from "./schemas/create-artist.schema";


export class ArtistController {
  private service: ArtistService;

  constructor() {
    this.service = new ArtistService();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const artists = await this.service.getAllArtist();
      res.status(200).json(artists);
    } catch (error) {
      console.error("Error fetching artists:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const artist = await this.service.getArtistById(req.params.id);
      res.status(200).json(artist);
    } catch (error) {
      console.error("Error fetching artist:", error);
      res.status(404).json({ message: "Artist not found" });
    }
  }

  async create(
    req: Request<{}, {}, CreateArtistInput>,
    res: Response,
  ): Promise<void> {
    try {
      const parsed = createArtistSchema.parse(req.body);

      const artist = await this.service.createArtist(parsed);

      res.status(201).json(artist);
    } catch (error) {
      console.error("Error creating artist:", error);
      res.status(400).json({ message: "Invalid request body" });
    }
  }

  async getSongs(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
      const songs = await this.service.getArtistSongs(req.params.id);
      res.status(200).json(songs);
    } catch (error) {
      console.error("Error fetching artist songs:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getAlbumsByArtistId(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    const albums = await this.service.getAlbumsByArtistId(id);

    return res.json(albums);
  }
}