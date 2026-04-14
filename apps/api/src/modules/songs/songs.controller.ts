import { Request, Response } from "express";
import { SongsService } from "./songs.service";
import { ApiError } from "@/errors/ApiError";
import { getPagination } from "@/utils/pagination";
import { paginatedResponse } from "@/utils/paginatedResponse";


type IdParam = {
  id: string;
};

export class SongsController {
  
  private songService: SongsService;
  
  constructor() {
    this.songService = new SongsService();
  }
  
  // without pagination 
  // getSongs = async (_req: Request, res: Response) => {
    
  //   const songs = await this.songService.getAllSongs();
    
  //   return res.status(200).json({
      
  //     success: true,
      
  //     data: songs
      
  //   });
    
  // };


  // with pagination
  getSongs = async (req: Request, res: Response) => {
  
    const {page, limit, skip, take} = getPagination(req.query);
  
    const {data, total} = await this.songService.getSongsPaginated(page, limit);
  
    return res.status(200).json({
      success: true,
      ...paginatedResponse(data, total, page, limit)
    });
  };

  
  getSongById = async (req: Request, res: Response) => {

    const { id } = req.params as IdParam;

    const song = await this.songService.getSongById(id);

    if (!song) {
      throw new ApiError(404, "Song not found");
    }

    return res.status(200).json({

      success: true,

      data: song

    });

  };


  createSong = async (req: Request, res: Response) => {

    const song = await this.songService.createSong(req.body);

    return res.status(201).json({

      success: true,

      data: song

    });

  };


  updateSong = async (req: Request, res: Response) => {

    const { id } = req.params as IdParam;

    const song = await this.songService.updateSong(id, req.body);

    return res.status(200).json({

      success: true,

      data: song

    });

  };


  deleteSong = async (req: Request, res: Response) => {

    const { id } = req.params as IdParam;

    await this.songService.deleteSong(id);

    return res.status(200).json({

      success: true,

      message: "Song deleted"

    });

  };

}