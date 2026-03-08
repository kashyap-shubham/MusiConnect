import { ApiError } from "@/errors/ApiError";
import { UsersRepository } from "./users.repository";



export class UserService {
    private userRepository: UsersRepository;

    constructor() {
        this.userRepository = new UsersRepository();
    }

    async getUserById(id: string) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new ApiError(404, "User not Found");
        }

        return user;
    }

    async getUserPlaylists(userId: string) {
        const playlist = await this.userRepository.getUserPlaylists(userId);

        return playlist;
    }
}