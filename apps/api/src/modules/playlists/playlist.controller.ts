import type { Request, Response } from "express";
import { PlaylistService } from "./playlist.service";
import { createPlaylistSchema } from "./schemas/create-playlist.schema";
import { ApiError } from "@/errors/ApiError";

export class PlaylistController {
  private playlistService: PlaylistService;

  constructor() {
    this.playlistService = new PlaylistService();
  }

  createPlaylist = async (req: Request, res: Response) => {
    const validatedData = createPlaylistSchema.parse(req.body);

    const playlist = await this.playlistService.createPlaylist(validatedData);

    return res.status(201).json({
      success: true,
      data: playlist,
    });
  };

  getPlaylistById = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const playlist = await this.playlistService.getPlaylistById(id);

    if (!playlist) {
      throw new ApiError(404, "Playlist not Found");
    }

    return res.status(201).json({
      success: true,
      data: playlist,
    });
  };

  getUserPlaylists = async (req: Request, res: Response) => {
    const { userId } = req.query as { userId: string };

    if (!userId) {
      throw new ApiError(400, "UserId is required");
    }

    const playlists = await this.playlistService.getUserPlaylists(userId);

    return res.status(201).json({
      success: true,
      data: playlists,
    });
  };

  addSongToPlaylist = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    const { songId } = req.body as { songId: string };

    const result = await this.playlistService.addSongToPlaylist(id, songId);

    return res.status(201).json({
      success: true,
      data: result,
    });
  };

  removeSongFromPlaylist = async (req: Request, res: Response) => {
    const { playlistId, songId } = req.params as {
      playlistId: string;
      songId: string;
    };

    await this.playlistService.removeSongFromPlaylist(playlistId, songId);

    return res.status(201).json({
      success: true,
      message: "Playlist Deleted",
    });
  };
}
