import { PlaylistRepository } from "./playlists.repository";
import type { CreatePlaylistInput } from "./schemas/create-playlist.schema";
import { ApiError } from "@/errors/ApiError";

export class PlaylistService {

  private playlistRepository: PlaylistRepository;

  constructor() {
    this.playlistRepository = new PlaylistRepository();
  }


  async createPlaylist(
    userId: string,
    data: CreatePlaylistInput
  ) {

    return this.playlistRepository.create({
      ...data,
      userId
    });

  }


  async getPlaylistById(id: string) {

    return this.playlistRepository.findById(id);

  }


  async getUserPlaylists(userId: string) {

    return this.playlistRepository.findByUserId(userId);

  }


  async addSongToPlaylist(
    userId: string,
    playlistId: string,
    songId: string
  ) {

    const playlist =
      await this.playlistRepository.findById(playlistId);

    if (!playlist) {
      throw new ApiError(404, "Playlist not found");
    }

    if (playlist.userId !== userId) {
      throw new ApiError(403, "Not allowed to modify this playlist");
    }

    return this.playlistRepository.addSongToPlaylist(
      playlistId,
      songId
    );

  }


  async removeSongFromPlaylist(
    userId: string,
    playlistId: string,
    songId: string
  ) {

    const playlist =
      await this.playlistRepository.findById(playlistId);

    if (!playlist) {
      throw new ApiError(404, "Playlist not found");
    }

    if (playlist.userId !== userId) {
      throw new ApiError(403, "Not allowed to modify this playlist");
    }

    return this.playlistRepository.removeSongFromPlaylist(
      playlistId,
      songId
    );

  }


  async deletePlaylist(
    userId: string,
    playlistId: string
  ) {

    const playlist = await this.playlistRepository.findById(playlistId);

    if (!playlist) {
      throw new ApiError(404, "Playlist Not found");
    }

    if (playlist.userId != userId) {
      throw new ApiError(403, "Not allowed to delete this playlist");
    }

    return this.playlistRepository.delete(playlistId);
  }

}