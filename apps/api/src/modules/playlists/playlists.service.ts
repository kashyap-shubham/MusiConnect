import { PlaylistRepository } from "./playlists.repository";
import type { CreatePlaylistInput } from "./schemas/create-playlist.schema";

export class PlaylistService {

  private playlistRepository: PlaylistRepository;

  constructor() {
    this.playlistRepository = new PlaylistRepository();
  }

  async createPlaylist(data: CreatePlaylistInput) {
    return this.playlistRepository.create(data);
  }

  async getPlaylistById(id: string) {
    return this.playlistRepository.findById(id);
  }

  async getUserPlaylists(userId: string) {
    return this.playlistRepository.findByUserId(userId);
  }

  async addSongToPlaylist(playlistId: string, songId: string) {
    return this.playlistRepository.addSongToPlaylist(
      playlistId,
      songId
    );
  }

  async removeSongFromPlaylist(playlistId: string, songId: string) {
    return this.playlistRepository.removeSongFromPlaylist(
      playlistId,
      songId
    );
  }

}