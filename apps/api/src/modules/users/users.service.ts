import { ApiError } from "@/errors/ApiError";
import { UsersRepository } from "./users.repository";

export class UserService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository();
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findById(id);

    return user;
  }

  async getUserPlaylists(userId: string) {
    const playlists = await this.userRepository.getUserPlaylists(userId);

    return playlists;
  }
}
