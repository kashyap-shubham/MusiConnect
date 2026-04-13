import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";

import { CreateSongInput } from "./schemas/create-song.schema";
import { UpdateSongInput } from "./schemas/update-song.schema";


export const songWithRelations = Prisma.validator<Prisma.SongDefaultArgs>()({

    include: {

      album: true,

      artists: {

        include: {

          artist: true

        }

      }

    }

  });


export type SongWithRelations = Prisma.SongGetPayload<typeof songWithRelations>;

export class SongRepository {


  async findAll(): Promise<SongWithRelations[]> {

    return prisma.song.findMany(
      songWithRelations
    );

  }


  async findById(id: string): Promise<SongWithRelations | null> {

    return prisma.song.findUnique({

      where: { id },

      ...songWithRelations

    });

  }


  async create(data: CreateSongInput): Promise<SongWithRelations> {

    return prisma.song.create({

      data: {

        title: data.title,

        duration: data.duration,

        audioKey: data.audioKey,

        imageKey: data.imageKey,

        albumId: data.albumId,


        artists: {

          create: data.artistIds.map(

            artistId => ({

              artist: {

                connect: { id: artistId }

              }

            })

          )

        }

      },

      ...songWithRelations

    });

  }


  async update(id: string, data: UpdateSongInput): Promise<SongWithRelations> {

    const { artistIds, ...songData } = data;

    return prisma.song.update({

      where: { id },

      data: {

        ...songData,


        ...(artistIds && artistIds.length > 0 && {

          artists: {

            deleteMany: {},

            create: artistIds.map(

              artistId => ({

                artist: {

                  connect: { id: artistId }

                }

              })

            )

          }

        })

      },

      ...songWithRelations

    });

  }


  async delete(id: string) {

    return prisma.song.delete({

      where: { id }

    });

  }

}