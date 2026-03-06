import { prisma } from "../../lib/prisma";
import type { CreatePlaylistInput } from "./schemas/create-playlist.schema";

export class PlaylistRepository {

  async create(data: CreatePlaylistInput) {
    return prisma.playlist.create({
      data: {
        name: data.name,
        userId: data.userId,
      },
    });
  }

  async findById(id: string) {
    return prisma.playlist.findUnique({
      where: { id },
      include: {
        songs: {
          include: {
            song: true,
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
    });
  }

  async addSongToPlaylist(playlistId: string, songId: string) {
    return prisma.playlistSong.create({
      data: {
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

}