import type { Request, Response } from "express";
import { PlaylistService } from "./playlist.service";
import { createPlaylistSchema } from "./schemas/create-playlist.schema";

type PlaylistParams = {
  id: string;
};

type PlaylistSongParams = {
  playlistId: string;
  songId: string;
};

export class PlaylistController {

  private playlistService: PlaylistService;

  constructor() {
    this.playlistService = new PlaylistService();
  }

  createPlaylist = async (req: Request, res: Response) => {
    try {

      const validatedData = createPlaylistSchema.parse(req.body);

      const playlist = await this.playlistService.createPlaylist(
        validatedData
      );

      return res.status(201).json(playlist);

    } catch (error) {

      console.error("Create playlist error:", error);

      return res.status(400).json({
        message: "Invalid request",
      });

    }
  };

  getPlaylistById = async (
    req: Request<PlaylistParams>,
    res: Response
  ) => {

    const { id } = req.params;

    const playlist = await this.playlistService.getPlaylistById(id);

    if (!playlist) {
      return res.status(404).json({
        message: "Playlist not found",
      });
    }

    return res.json(playlist);

  };

  getUserPlaylists = async (req: Request, res: Response) => {

    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        message: "userId is required",
      });
    }

    const playlists = await this.playlistService.getUserPlaylists(
      userId as string
    );

    return res.json(playlists);

  };

  addSongToPlaylist = async (
    req: Request<PlaylistParams>,
    res: Response
  ) => {

    const { id } = req.params;
    const { songId } = req.body;

    const result = await this.playlistService.addSongToPlaylist(
      id,
      songId
    );

    return res.status(201).json(result);

  };

  removeSongFromPlaylist = async (
    req: Request<PlaylistSongParams>,
    res: Response
  ) => {

    const { playlistId, songId } = req.params;

    await this.playlistService.removeSongFromPlaylist(
      playlistId,
      songId
    );

    return res.status(204).send();

  };

}