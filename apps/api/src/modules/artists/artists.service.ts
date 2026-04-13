import { ApiError } from "@/errors/ApiError";
import { ArtistRepository } from "./artists.repository";
import { CreateArtistInput } from "./schemas/create-artist.schema";
import { UpdateArtistInput } from "./schemas/update-artist.schema";



export class ArtistService {
    private artistRepository: ArtistRepository;

    constructor() {
        this.artistRepository = new ArtistRepository();
    }


    async getAllArtist() {
        return this.artistRepository.findAll();
    }

    async getArtistById(id: string) {
        const artist = await this.artistRepository.findById(id);

        if (!artist) {
            throw new ApiError(404, "Artist not found");
        }

        return artist;
    }

    async createArtist(data: CreateArtistInput) {
        return this.artistRepository.create(data);
    }

    async updateArtist(id: string, data: UpdateArtistInput) {
        const artist = await this.artistRepository.findById(id);

        if (!artist) {
            throw new ApiError(404, "Artist not found");
        }

        return this.artistRepository.update(id, data);
    }

    async deleteArtist(id: string) {
        const artist = await this.artistRepository.findById(id);

        if (!artist) {
            throw new ApiError(404, "Artist not found");
        }

        return this.artistRepository.delete(id);
    }

    async getArtistSongs(id: string) {
        const artist = await this.artistRepository.findById(id);

        if (!artist) {
            throw new ApiError(404, "Artist not found");
        }

        return this.artistRepository.findSongByArtist(id);
    }

    async getAlbumsByArtistId(artistId: string) {

        const artist = await this.artistRepository.findById(artistId);

        if (!artist) {
            throw new ApiError(404, "Artist not found");
        }

        return this.artistRepository.findAlbumsByArtistId(artistId);

  }
}