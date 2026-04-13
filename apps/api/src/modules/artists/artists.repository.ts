import { prisma } from "../../lib/prisma";
import { CreateArtistInput } from "./schemas/create-artist.schema";
import { UpdateArtistInput } from "./schemas/update-artist.schema";

export class ArtistRepository {

  async findAll() {
    return prisma.artist.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }

  async findById(id: string) {
    return prisma.artist.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            songs: true,
            albums: true
          }
        }
      }
    });
  }

  async create(data: CreateArtistInput) {
    return prisma.artist.create({
      data: {
        name: data.name,
        image: data.image,
      },
      select: {

        id: true,

        name: true,

        image: true,

        createdAt: true

      }
    });
  }

  
  async update(id: string, data: UpdateArtistInput) {
    
    return prisma.artist.update({

      where: { id },
      
      data,
      
      select: {

        id: true,

        name: true,
        
        image: true,

        updatedAt: true

      }
      
    });
    
  }
  
  async delete(id: string) {

    return prisma.artist.delete({

      where: { id },

      select: {

        id: true
        
      }
      
    });
    
  }
  
   async findSongByArtist(artistId: string) {

    return prisma.song.findMany({

      where: {

        artists: {

          some: {

            artistId

          }

        }

      },

      orderBy: {

        createdAt: "desc"

      },

      select: {

        id: true,

        title: true,

        duration: true,

        imageKey: true,

        audioKey: true,


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

  }


  async findAlbumsByArtistId(artistId: string) {

    return prisma.album.findMany({

      where: {

        artistId

      },

      orderBy: {

        releaseDate: "desc"

      },

      select: {

        id: true,

        title: true,

        imageKey: true,

        releaseDate: true,


        songs: {

          select: {

            id: true,

            title: true,

            duration: true,

            imageKey: true

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

} 