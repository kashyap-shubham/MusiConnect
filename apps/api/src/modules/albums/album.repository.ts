import { prisma } from "../../lib/prisma";
import type { CreateAlbumInput } from "./schemas/create-album.schema";

export class AlbumRepository {

  async create(data: CreateAlbumInput) {
    return prisma.album.create({
      data: {
        title: data.title,
        artistId: data.artistId,
        releaseDate: new Date(data.releaseDate),
        coverImageKey: data.coverImageKey
      },
      include: {
        artist: true,
        songs: true
      }
    });
  }

  async findAll() {
    return prisma.album.findMany({
      include: {
        artist: true
      },
      orderBy: {
        releaseDate: "desc"
      }
    });
  }

  async findById(id: string) {
    return prisma.album.findUnique({
      where: { id },
      include: {
        artist: true,
        songs: true
      }
    });
  }

  async findSongsByAlbumId(albumId: string) {
    return prisma.song.findMany({
      where: { albumId },
      include: {
        artists: true
      }
    });
  }

}