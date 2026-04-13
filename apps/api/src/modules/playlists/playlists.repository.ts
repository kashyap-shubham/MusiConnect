import { prisma } from "@/lib/prisma";

export interface CreatePlaylistRepoInput {
  name: string;
  description?: string;
  userId: string;
}

export class PlaylistRepository {
  async create(data: CreatePlaylistRepoInput) {
    return prisma.playlist.create({
      data: {
        name: data.name,
        description: data.description,
        userId: data.userId,
      },

      select: {
        id: true,
        name: true,
        description: true,
        userId: true,
        createdAt: true,
      },
    });
  }

  async findById(id: string) {
    return prisma.playlist.findUnique({
      where: { id },

      select: {
        id: true,
        name: true,
        description: true,
        userId: true,
        createdAt: true,

        songs: {
          select: {
            songId: true,

            song: {
              select: {
                id: true,
                title: true,
                imageUrl: true,
                duration: true,
              },
            },
          },
        },
      },
    });
  }

  async findByUserId(userId: string) {
    return prisma.playlist.findMany({
      where: { userId },

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,

        _count: {
          select: {
            songs: true,
          },
        },
      },
    });
  }

  async addSongToPlaylist(playlistId: string, songId: string) {
    return prisma.playlistSong.upsert({
      where: {
        playlistId_songId: {
          playlistId,
          songId,
        },
      },
      update: {},
      create: {
        playlistId,
        songId,
      },
    });
  }

  async removeSongFromPlaylist(playlistId: string, songId: string) {
    return prisma.playlistSong.delete({
      where: {
        playlistId_songId: {
          playlistId,
          songId,
        },
      },
    });
  }

  async delete(playlistId: string) {
    return prisma.playlist.delete({
      where: { id: playlistId },
    });
  }
}
