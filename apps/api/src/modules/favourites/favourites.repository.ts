import { prisma } from "@/lib/prisma";
import { ToggleFavouriteInput } from "./schemas/toggle-favourite.scheam";



export type CreateFavouriteInput = ToggleFavouriteInput & {
    userId: string;
}


export class FavuriteRepository {


    async findOne(userId: string, entityId: string, entityType: "SONG" | "PLAYLIST") {

        return prisma.favourite.findUnique({
            where: {
                userId_entityType_entityId: {
                    userId,
                    entityId,
                    entityType
                }
            }
        });
    }


    async create(data: CreateFavouriteInput) {
        
        return prisma.favourite.create({
            data
        });
    }


    async delete(id: string) {
        return prisma.favourite.delete({
            where: {id}
        });
    }


    async findLikedSongs(userId: string) {

        const favourites = await prisma.favourite.findMany({
            where: {
                userId,
                entityType: "SONG"
            },

            orderBy: {
                createdAt: "desc"
            },

            select: {
                entityId: true
            }
        });

        if (favourites.length === 0) {
            return [];
        }

        const songs = await prisma.song.findMany({
            
            where: {
                id: {
                    in: favourites.map(f => f.entityId)
                }
            },

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
        });

        return songs.map(song => ({
            id: song.id,
            title: song.title,
            duration: song.duration,
            imageKey: song.imageKey,

            album: song.album,

            artists: song.artists.map(a => a.artist)

        }));
    }
}