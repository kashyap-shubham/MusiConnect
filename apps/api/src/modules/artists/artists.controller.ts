import { Request, Response } from "express";
import { ArtistService } from "./artists.service";
import { ApiError } from "@/errors/ApiError";
import { getPagination } from "@/utils/pagination";
import { paginatedResponse } from "@/utils/paginatedResponse";


type ArtistIdParam = {
  id: string;
};


export class ArtistController {

  private artistService: ArtistService;

  constructor() {
    this.artistService = new ArtistService();
  }

  // without pagination
  // getAll = async (_req: Request, res: Response) => {

  //   const artists = await this.artistService.getAllArtist();

  //   return res.status(200).json({

  //     success: true,

  //     data: artists

  //   });

  // };


  // with pagination 
  getAll = async (req: Request, res: Response) => {
    const {page, limit, skip, take} = getPagination(req.query);

    const {data, total} = await this.artistService.getArtistsPaginated(skip, take);

    return res.status(200).json({
      success: true,
      ...paginatedResponse(data, total, page, limit)
    });
  };


  getById = async (req: Request, res: Response) => {

    const { id } = req.params as ArtistIdParam;

    const artist = await this.artistService.getArtistById(id);

    if (!artist) {
      throw new ApiError(404, "Artist not found");
    }

    return res.status(200).json({

      success: true,

      data: artist

    });

  };


  create = async (req: Request, res: Response) => {

    const artist = await this.artistService.createArtist(req.body);

    return res.status(201).json({

      success: true,

      data: artist

    });

  };


  update = async (req: Request, res: Response) => {

    const { id } = req.params as ArtistIdParam;

    const artist = await this.artistService.updateArtist(id, req.body);

    return res.status(200).json({

      success: true,

      data: artist

    });

  };


  delete = async (req: Request, res: Response) => {

    const { id } = req.params as ArtistIdParam;

    await this.artistService.deleteArtist(id);

    return res.status(200).json({

      success: true,

      message: "Artist deleted"

    });

  };


  getSongsByArtistId = async (req: Request, res: Response) => {

    const { id } = req.params as ArtistIdParam;

    const songs = await this.artistService.getArtistSongs(id);

    return res.status(200).json({

      success: true,

      data: songs

    });

  };


  getAlbumsByArtistId = async (req: Request, res: Response) => {

    const { id } = req.params as ArtistIdParam;

    const albums = await this.artistService.getAlbumsByArtistId(id);

    return res.status(200).json({

      success: true,

      data: albums

    });

  };

}