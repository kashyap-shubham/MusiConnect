import { PlaylistRepository } from "./playlists.repository";
import type { CreatePlaylistInput } from "./schemas/create-playlist.schema";
import { ApiError } from "@/errors/ApiError";

export class PlaylistService {

  private playlistRepository: PlaylistRepository;

  constructor() {
    this.playlistRepository = new PlaylistRepository();
  }

  private async ensureOwnership(userId: string, playlistId: string) {

    const playlist = await this.playlistRepository.findOwnershipById(playlistId);

    if (!playlist) {
      throw new ApiError(404, "Playlist not found");
    }

    if (playlist.userId !== userId) {
      throw new ApiError(403, "Not allowed to modify this playlist");
    }
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


  async getPlaylistDetails(userId: string, playlistId: string) {

    await this.ensureOwnership(userId, playlistId);

    const playlist = await this.playlistRepository.findDetailsPlaylistId(playlistId);

    if (!playlist) {
      throw new ApiError(404, "Playlist not found");
    }

    return playlist;

  }


  async getUserPlaylists(userId: string) {

    return this.playlistRepository.findByUserId(userId);

  }


  async renamePlaylist(userId: string, playlistId: string, name: string) {

    await this.ensureOwnership(userId, playlistId);

    return this.playlistRepository.updateName(playlistId, name);
  };


  async addSongToPlaylist(
    userId: string,
    playlistId: string,
    songId: string
  ) {

    await this.ensureOwnership(userId, playlistId);

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

    await this.ensureOwnership(userId, playlistId);

    return this.playlistRepository.removeSongFromPlaylist(
      playlistId,
      songId
    );

  }


  async deletePlaylist(
    userId: string,
    playlistId: string
  ) {

    await this.ensureOwnership(userId, playlistId);

    await this.playlistRepository.delete(playlistId)

  }

}