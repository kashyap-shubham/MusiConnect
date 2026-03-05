import { prisma } from "../../lib/prisma"
import { Song, Prisma } from "../../generated/prisma"
import { CreateSongInput } from "./schemas/create-song.schema";


export const songWithRelations = Prisma.validator<Prisma.SongDefaultArgs>()({
  include: {
    album: true,
    artists: {
      include: {
        artist: true,
      },
    },
  },
});

export type SongWithRelations = Prisma.SongGetPayload<typeof songWithRelations>;


export class SongRepository {

    async findAll(): Promise<SongWithRelations[]> {

        return prisma.song.findMany({
            include: {
                album: true,
                artists: {
                    include: {
                        artist: true,
                    },
                },
            },
        });
    }


    async findById(id: string): Promise<SongWithRelations | null> {

        return prisma.song.findUnique({
            where: {id},
            include: {
                album: true,
                artists: {
                    include: {
                        artist: true,
                    },
                },
            },
        });
    }


    async create(data: CreateSongInput) {
        return prisma.song.create({
            data: {
            title: data.title,
            duration: data.duration,
            albumId: data.albumId,
            audioKey: data.audioKey,

            artists: {
                create: [
                {
                    artist: {
                    connect: { id: data.artistId },
                    },
                },
                ],
            },
            },
            ...songWithRelations,
        });
    }

    
}