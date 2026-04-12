import { prisma } from "@/lib/prisma";

export class UserRepository {

  async findById(id: string) {

    return prisma.user.findUnique({

      where: { id },

      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true
      }

    });

  }

  async findByEmail(email: string) {

    return prisma.user.findUnique({

      where: { email },

      select: {
        id: true,
        email: true,
        name: true,
        image: true
      }

    });

  }

  async getUserPlaylists(userId: string) {

    return prisma.playlist.findMany({

      where: { userId },

      orderBy: { createdAt: "desc" },

      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,

        _count: {
          select: {
            songs: true
          }
        }

      }

    });

  }

}