import { ApiError } from "@/errors/ApiError";
import { UserRepository } from "./users.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findById(id);

    return user;
  }

  async getUserPlaylists(userId: string) {
    const playlists = await this.userRepository.getUserPlaylists(userId);

    return playlists;
  }

  async updateUserProfile(userId: string, data: {name?: string, image?: string | null}) {
    return this.userRepository.updateUser(userId, data)
  }
}
