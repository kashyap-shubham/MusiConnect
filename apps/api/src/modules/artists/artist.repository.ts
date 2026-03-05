import { Artist } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { CreateArtistInput } from "./schemas/create-artist.schema";


export class ArtistRepository {
    async findAll(): Promise<Artist[]> {
       return prisma.artist.findMany({
        orderBy: {
            createdAt: "desc",
        },
       });
    }


    async findById(id: string): Promise<Artist | null> {
        return prisma.artist.findUnique({
            where: {id},
        });
    }


    async create(data: CreateArtistInput): Promise<Artist> {
        return prisma.artist.create({
           data: {
            name: data.name,
            image: data.image,
           }, 
        });
    }


    async findSongByArtist(artistId: string) {
        return prisma.song.findMany({
            where: {
                artists: {
                    some: {
                        artistId: artistId,
                    },
                },
            },
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


}