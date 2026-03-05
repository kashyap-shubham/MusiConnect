import { prisma } from "../../lib/prisma"
import { Song, Prisma } from "../../generated/prisma"


type SongwithRelations = Song & {
    album: Prisma.AlbumGetPayload<{}> | null;
    artists: {
        artist: Prisma.ArtistGetPayload<{}>;
    } [];
};


export class SongRepository {

    async findAll(): Promise<SongwithRelations[]> {

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


    async findById(id: string): Promise<SongwithRelations | null> {

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

    
}