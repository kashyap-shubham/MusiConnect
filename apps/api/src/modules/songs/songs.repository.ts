import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";

import { CreateSongInput } from "./schemas/create-song.schema";
import { UpdateSongInput } from "./schemas/update-song.schema";

/**
 * DTO-optimized select for song entity
 * ensures consistent shape across all queries
 */
export const songSelect = Prisma.validator<Prisma.SongDefaultArgs>()({
    select: {
      id: true,
      title: true,
      duration: true,
      audioKey: true,
      imageKey: true,
      
      album: {
        select: {
          id: true,
          title: true,
          imageKey: true
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


export type SongEntity = Prisma.SongGetPayload<typeof songSelect>;


export class SongRepository {

  async findAll(): Promise<SongEntity[]> {

    return prisma.song.findMany({

      ...songSelect,
      orderBy: {
        createdAt: "desc"
      }
    });

  }



  async findById(id: string): Promise<SongEntity | null> {
    
    return prisma.song.findUnique({

      where: { id },
      ...songSelect
    });

  }



  async create(data: CreateSongInput): Promise<SongEntity> {
    
    return prisma.song.create({
      data: {
        title: data.title,
        duration: data.duration,
        audioKey: data.audioKey,
        imageKey: data.imageKey,
        albumId: data.albumId,
        artists: {
          create:
            data.artistIds.map(
              artistId => ({
                artist: {
                  connect: {
                    id: artistId
                  }
                }
              })
            )
        }
      },
      ...songSelect
    });

  }



  async update(id: string, data: UpdateSongInput): Promise<SongEntity> {

    const {artistIds, ...songData} = data;

    return prisma.song.update({

      where: { id },
      data: {
        ...songData,
        ...(artistIds && {
          artists: {
            deleteMany: {},
            create:
              artistIds.map(
                artistId => ({
                  artist: {
                    connect: {
                      id: artistId
                    }
                  }
                })
              )
          }
        })
      },
      ...songSelect
    });

  }



  async delete(id: string) {

    return prisma.song.delete({
      where: { id }
    });

  }



  async findAllPaginated(skip: number, take: number) {

    const [data, total] = await Promise.all([
      prisma.song.findMany({
        skip,
        take,
        orderBy: {
          createdAt: "desc"
        },
        ...songSelect
      }),
      prisma.song.count()
    ]);

    return {data, total};

  }

}