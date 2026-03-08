import { prisma } from "@/lib/prisma";

export class UsersRepository {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserPlaylists(userId: string) {
    return prisma.playlist.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }
}
