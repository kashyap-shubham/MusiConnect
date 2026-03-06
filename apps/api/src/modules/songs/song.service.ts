import { SongRepository } from "./song.repository";
import { CreateSongInput } from "./schemas/create-song.schema";
import { UpdateSongInput } from "./schemas/update-song.schema";

export class SongsService {

  private repository = new SongRepository();

  async getAllSongs() {
    return this.repository.findAll();
  }

  async getSongById(id: string) {
    return this.repository.findById(id);
  }

  async createSong(data: CreateSongInput) {
    return this.repository.create(data);
  }

  async updateSong(id: string, data: UpdateSongInput) {
    return this.repository.update(id, data);
  }

  async deleteSong(id: string) {
    return this.repository.delete(id);
  }
}