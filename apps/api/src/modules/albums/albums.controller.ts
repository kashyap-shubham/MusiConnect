import type { Request, Response } from "express";

import { AlbumService } from "./albums.service";

import { ApiError } from "@/errors/ApiError";


type AlbumIdParam = {
  id: string;
};


export class AlbumController {

  private albumService: AlbumService;

  constructor() {
    this.albumService = new AlbumService();
  }


  createAlbum = async (req: Request, res: Response) => {

    const album = await this.albumService.createAlbum(req.body);

    return res.status(201).json({

      success: true,

      data: album

    });

  };


  getAlbums = async (_req: Request, res: Response) => {

    const albums = await this.albumService.getAlbums();

    return res.status(200).json({

      success: true,

      data: albums

    });

  };


  getAlbumById = async (req: Request, res: Response) => {

    const { id } = req.params as AlbumIdParam;

    const album = await this.albumService.getAlbumById(id);

    if (!album) {
      throw new ApiError(404, "Album not found");
    }

    return res.status(200).json({

      success: true,

      data: album

    });

  };


  getSongsByAlbumId = async (req: Request, res: Response) => {

    const { id } = req.params as AlbumIdParam;

    const songs = await this.albumService.getSongsByAlbumId(id);

    return res.status(200).json({

      success: true,

      data: songs

    });

  };


  updateAlbum = async (req: Request, res: Response) => {

    const { id } = req.params as AlbumIdParam;

    const album = await this.albumService.updateAlbum(id, req.body);

    return res.status(200).json({

      success: true,

      data: album

    });

  };


  deleteAlbum = async (req: Request, res: Response) => {

    const { id } = req.params as AlbumIdParam;

    await this.albumService.deleteAlbum(id);

    return res.status(200).json({

      success: true,

      message: "Album deleted"

    });

  };

}