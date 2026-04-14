import { SongRepository } from "./songs.repository";
import { CreateSongInput } from "./schemas/create-song.schema";
import { UpdateSongInput } from "./schemas/update-song.schema";

export class SongsService {

  private songRepository: SongRepository;

  constructor() {
    this.songRepository = new SongRepository();

  }

  async getAllSongs() {
    return this.songRepository.findAll();
  }

  async getSongById(id: string) {
    return this.songRepository.findById(id);
  }

  async createSong(data: CreateSongInput) {
    return this.songRepository.create(data);
  }

  async updateSong(id: string, data: UpdateSongInput) {
    return this.songRepository.update(id, data);
  }

  async deleteSong(id: string) {
    return this.songRepository.delete(id);
  }

  async getSongsPaginated(page: number, limit: number) {
    const skip = (page - 1) * limit;

    return this.songRepository.findAllPaginated(skip, limit);
  }
}