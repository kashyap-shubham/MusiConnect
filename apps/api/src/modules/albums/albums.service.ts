import { AlbumRepository } from "./albums.repository";

import { ApiError } from "@/errors/ApiError";

import type { CreateAlbumInput } from "./schemas/create-album.schema";
import type { UpdateAlbumInput } from "./schemas/update-album.schema";


export class AlbumService {

  private albumRepository: AlbumRepository;

  constructor() {
    this.albumRepository = new AlbumRepository();
  }


  async createAlbum(data: CreateAlbumInput) {


    const artistExists = await this.albumRepository.artistExists(data.artistId);

    if (!artistExists) {
      throw new ApiError(404, "Artist not found");
    }

    return this.albumRepository.create(data);

  }


  async getAlbums() {

    return this.albumRepository.findAll();

  }

  
  async getAlbumsPaginated(skip: number, take: number) {
    return this.albumRepository.findAllPaginated(skip, take);
  }


  async getAlbumById(id: string) {

    return this.albumRepository.findById(id);

  }


  async getSongsByAlbumId(id: string) {

    const album = await this.albumRepository.findById(id);

    if (!album) {
      throw new ApiError(404, "Album not found");
    }

    return this.albumRepository.findSongsByAlbumId(id);

  }


  async updateAlbum(id: string, data: UpdateAlbumInput) {

    const album = await this.albumRepository.findById(id);

    if (!album) {
      throw new ApiError(404, "Album not found");
    }

    if (data.artistId) {
      const artistExists = await this.albumRepository.artistExists(data.artistId);

      if (!artistExists) {
        throw new ApiError(404,"Artist not found");
      }

    }

    return this.albumRepository.update(id, data);

  }


  async deleteAlbum(id: string) {

    const album = await this.albumRepository.findById(id);

    if (!album) {
      throw new ApiError(404, "Album not found");
    }

    return this.albumRepository.delete(id);

  }

}