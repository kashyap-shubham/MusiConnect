import type { Request, Response } from "express";
import { PlaylistService } from "./playlists.service";
import { ApiError } from "@/errors/ApiError";

export class PlaylistController {

  private playlistService: PlaylistService;

  constructor() {
    this.playlistService = new PlaylistService();
  }


  createPlaylist = async (req: Request, res: Response) => {

    const userId = req.user!.id;

    const playlist =
      await this.playlistService.createPlaylist(
        userId,
        req.body
      );

    return res.status(201).json({
      success: true,
      data: playlist
    });

  };


  getPlaylistById = async (req: Request, res: Response) => {

    const { id } = req.params as { id: string };

    const playlist =
      await this.playlistService.getPlaylistById(id);

    if (!playlist) {
      throw new ApiError(404, "Playlist not found");
    }

    return res.status(200).json({
      success: true,
      data: playlist
    });

  };


  getUserPlaylists = async (req: Request, res: Response) => {

    const userId = req.user!.id;

    const playlists =
      await this.playlistService.getUserPlaylists(userId);

    return res.status(200).json({
      success: true,
      data: playlists
    });

  };


  addSongToPlaylist = async (req: Request, res: Response) => {

    const userId = req.user!.id;

    const { playlistId } = req.params as { playlistId: string };

    const { songId } = req.body as { songId: string };

    const playlist = await this.playlistService.addSongToPlaylist(
        userId,
        playlistId,
        songId
      );

    return res.status(200).json({
      success: true,
      data: playlist
    });

  };


  removeSongFromPlaylist = async (req: Request, res: Response) => {

    const userId = req.user!.id;

    const { playlistId, songId } = req.params as { playlistId: string; songId: string;};

    await this.playlistService.removeSongFromPlaylist(
      userId,
      playlistId,
      songId
    );

    return res.status(200).json({
      success: true,
      message: "Song removed from playlist"
    });

  };

}