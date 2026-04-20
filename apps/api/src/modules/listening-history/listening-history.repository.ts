import { prisma } from "@/lib/prisma";
import { trackPlayInput } from "./schemas/track-play.schema";



export type CreateHistoryInput = trackPlayInput & {
    userId: string;
};


export class ListeningHistoryRepository {

    async create(data: CreateHistoryInput) {
        return prisma.listeningHistory.create({
            data
        });
    };

    async getRecentByUser(userId: string) {

        const history = await prisma.listeningHistory.findMany({

            where: {userId},
            orderBy: {
                playedAt: "desc"
            },
            take: 20,
            select: {
                playedAt: true,
                song: {
                    select: {
                        id: true,
                        title: true,
                        duration: true,
                        imageKey: true,
                        album: {
                            select: {
                                id: true,
                                title: true
                            }
                        },
                        artists: {
                            select: {
                                artist: {
                                    select: {
                                        id: true,
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        return history.map(h => ({
            id: h.song.id,
            title: h.song.title,
            duration: h.song.duration,
            imageKey: h.song.imageKey,
            playedAt: h.playedAt,
            album: h.song.album,
            artists: h.song.artists.map(a => a.artist)
        }));
    };
}