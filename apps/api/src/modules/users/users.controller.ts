import { Request, Response } from "express";
import { UserService } from "./users.service";
import { ApiError } from "@/errors/ApiError";

export interface AuthRequest extends Request {
  user: {
    id: string;
  };
}

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getCurrentUser = async (req: AuthRequest, res: Response) => {
        const { id } = req.user;

        const user = await this.userService.getUserById(id);

        if (!user) {
            throw new ApiError(404, "User Not Found");
        }

        return res.status(200).json({
            success: true,
            data: user,
        });
    }

    getUserPlaylists = async (req: Request, res: Response) => {
        const { id } = req.params as { id: string };

        const playlist = await this.userService.getUserPlaylists(id);


        return res.status(200).json({
            success: true,
            data: playlist
        });
    }
    
}