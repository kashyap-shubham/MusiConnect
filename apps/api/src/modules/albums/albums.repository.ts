import { prisma } from "@/lib/prisma";

import type { CreateAlbumInput } from "./schemas/create-album.schema";
import type { UpdateAlbumInput } from "./schemas/update-album.schema";


export class AlbumRepository {


  async artistExists(artistId: string) {

    const artist = await prisma.artist.findUnique({

        where: { id: artistId },

        select: { id: true }

      });

    return !!artist;

  }


  async create(data: CreateAlbumInput) {

    return prisma.album.create({

      data: {

        title: data.title,

        artistId: data.artistId,

        imageKey: data.imageKey,

        releaseDate:
          new Date(data.releaseDate)

      },

      select: {

        id: true,

        title: true,

        imageKey: true,

        releaseDate: true,

        createdAt: true,


        artist: {

          select: {

            id: true,

            name: true

          }

        }

      }

    });

  }


  async findAll() {

    return prisma.album.findMany({

      orderBy: {

        releaseDate: "desc"

      },

      select: {

        id: true,

        title: true,

        imageKey: true,

        releaseDate: true,


        artist: {

          select: {

            id: true,

            name: true

          }

        },


        _count: {

          select: {

            songs: true

          }

        }

      }

    });

  }


  async findAllPaginated(skip: number, take: number) {

    const [albums, total] = await Promise.all([
      prisma.album.findMany({
        skip,
        take,
        orderBy: {
          releaseDate: "desc"
        },

        select: {
          id: true,
          title: true,
          imageKey: true,
          releaseDate: true,

          artist: {
            select: {
              id: true,
              name: true
            }
          },

          _count: {
            select: {
              songs: true
            }
          }
        }
      }),
      
      prisma.album.count()
    ]);
    
    return {
      data: albums,
      total
    };

  }


  async findById(id: string) {

    return prisma.album.findUnique({

      where: { id },

      select: {

        id: true,

        title: true,

        imageKey: true,

        releaseDate: true,

        createdAt: true,

        updatedAt: true,


        artist: {

          select: {

            id: true,

            name: true

          }

        },


        songs: {

          select: {

            id: true,

            title: true,

            duration: true,

            imageKey: true,

            audioKey: true

          }

        }

      }

    });

  }


  async findSongsByAlbumId(albumId: string) {

    return prisma.song.findMany({

      where: {

        albumId

      },

      orderBy: {

        createdAt: "asc"

      },

      select: {

        id: true,

        title: true,

        duration: true,

        imageKey: true,

        audioKey: true,


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

  }


  async update(

    id: string,

    data: UpdateAlbumInput

  ) {

    return prisma.album.update({

      where: { id },

      data: {

        ...data,

        ...(data.releaseDate && {

          releaseDate:
            new Date(data.releaseDate)

        })

      },

      select: {

        id: true,

        title: true,

        imageKey: true,

        releaseDate: true,

        updatedAt: true

      }

    });

  }


  async delete(id: string) {

    return prisma.album.delete({

      where: { id },

      select: {

        id: true

      }

    });

  }

}