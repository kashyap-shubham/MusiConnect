import { prisma } from "@/lib/prisma";

import type { CreateSongInput } from "./schemas/create-song.schema";
import type { UpdateSongInput } from "./schemas/update-song.schema";

/**
 * DTO-optimized select for song entity
 * ensures consistent shape across all queries
 */
export const songSelect = {
  id: true,
  title: true,
  duration: true,
  audioKey: true,
  imageKey: true,

  album: {
    select: {
      id: true,
      title: true,
      imageKey: true,
    },
  },

  artists: {
    select: {
      artist: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  },
} as const;

export interface SongEntity {
  id: string;
  title: string;
  duration: number;
  audioKey: string;
  imageKey: string | null;

  album: {
    id: string;
    title: string;
    imageKey: string | null;
  } | null;

  artists: {
    artist: {
      id: string;
      name: string;
    };
  }[];
}

export class SongRepository {

  async findAll(): Promise<SongEntity[]> {

    return prisma.song.findMany({

      select: songSelect,
      orderBy: {
        createdAt: "desc"
      }

    }) as Promise<SongEntity[]>;

  }



  async findById(id: string): Promise<SongEntity | null> {

    return prisma.song.findUnique({

      where: { id },
      select: songSelect

    }) as Promise<SongEntity | null>;

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

      select: songSelect

    }) as Promise<SongEntity>;

  }



  async update(id: string, data: UpdateSongInput): Promise<SongEntity> {

    const { artistIds, ...songData } = data;

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

      select: songSelect

    }) as Promise<SongEntity>;

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

        select: songSelect

      }),

      prisma.song.count()

    ]);

    return {
      data: data as SongEntity[],
      total
    };

  }

}