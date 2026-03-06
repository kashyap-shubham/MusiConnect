import { Artist } from "../../generated/prisma";
import { ArtistRepository } from "./artist.repository";
import { CreateArtistInput } from "./schemas/create-artist.schema";



export class ArtistService {
    private repository: ArtistRepository;

    constructor() {
        this.repository = new ArtistRepository();
    }


    async getAllArtist(): Promise<Artist[]> {
        return this.repository.findAll();
    }

    async getArtistById(id: string) {
        const artist = await this.repository.findById(id);

        if (!artist) {
            throw new Error("Artist not found");
        }

        return artist;
    }

    async createArtist(data: CreateArtistInput): Promise<Artist> {
        return this.repository.create(data);
    }

    async getArtistSongs(id: string) {
        return this.repository.findSongByArtist(id);
    }

    async getAlbumsByArtistId(artistId: string) {
      return this.repository.findAlbumsByArtistId(artistId);
    }
}