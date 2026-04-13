import { Request, Response } from "express";
import { UserService } from "./users.service";
import { ApiError } from "@/errors/ApiError";
import { success } from "zod";

export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getCurrentUser = async (req: Request, res: Response) => {

    const userId = req.user!.id;

    const user = await this.userService.getUserById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    return res.status(200).json({
      success: true,
      data: user
    });

  };

  getCurrentUserPlaylists = async (req: Request, res: Response) => {

    const userId = req.user!.id;

    const playlists = await this.userService.getUserPlaylists(userId);

    return res.status(200).json({
      success: true,
      data: playlists
    });

  };

  updateCurrentUser = async (req: Request, res: Response) => {

    const userId = req.user!.id;
    const { name, image, email } = req.body;
    const updateUser = await this.userService.updateUserProfile(userId , {name, image, email});

    return res.status(200).json({
        success: true,
        data: updateUser
    });
  };

}