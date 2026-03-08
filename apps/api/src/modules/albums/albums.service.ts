import { AlbumRepository } from "./albums.repository";
import type { CreateAlbumInput } from "./schemas/create-album.schema";

export class AlbumService {

  private albumRepository: AlbumRepository;

  constructor() {
    this.albumRepository = new AlbumRepository();
  }

  async createAlbum(data: CreateAlbumInput) {
    return this.albumRepository.create(data);
  }

  async getAlbums() {
    return this.albumRepository.findAll();
  }

  async getAlbumById(id: string) {
    return this.albumRepository.findById(id);
  }

  async getSongsByAlbumId(id: string) {
    return this.albumRepository.findSongsByAlbumId(id);
  }

}