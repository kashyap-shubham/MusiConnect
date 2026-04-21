import { Request, Response } from "express";
import { FavouriteService } from "./favourtes.service";



export class FavouriteController {
  private favouriteService: FavouriteService;

  constructor() {
    this.favouriteService = new FavouriteService();
  }

  toggleFavourite = async (req: Request, res: Response) => {
    const userId = req.user!.id;

    const result = await this.favouriteService.toggleFavourite(
      userId,

      req.body,
    );

    return res.status(200).json({
      success: true,

      data: result,
    });
  };

  getLikedSongs = async (req: Request, res: Response) => {
    const userId = req.user!.id;

    const songs = await this.favouriteService.getLikedSongs(userId);

    return res.status(200).json({
      success: true,

      data: songs,
    });
  };
}
