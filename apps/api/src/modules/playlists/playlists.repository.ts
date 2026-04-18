import { prisma } from "@/lib/prisma";
import { CreatePlaylistInput } from "./schemas/create-playlist.schema";

export type CreatePlaylistRepoInput = CreatePlaylistInput & {
  userId: string;
}

export class PlaylistRepository {
  
  async create(data: CreatePlaylistRepoInput) {
    const playlist = await prisma.playlist.create({
      data: {
        name: data.name,
        userId: data.userId,
      },

      select: {
        id: true,
        name: true,
        createdAt: true,
        
        _count: {
          select: {
            songs: true
          }
        }
      }
    });

    return {
      id: playlist.id,
      name: playlist.name,
      createdAt: playlist.createdAt,
      songsCount: playlist._count.songs 
    }

  }

  async findDetailsPlaylistId(playlistId: string) {

    const playlist = await prisma.playlist.findUnique({
      where: {id: playlistId},

      select: {
        id: true,
        name: true,
        createdAt: true,
        songs: {
          orderBy: {
            addedAt: "asc"
          },
          select: {
            addedAt: true,
            song: {
              select: {
                id: true,
                title: true,
                duration: true,
                imageKey: true,
                album: {
                  select: {
                    id: true,
                    title: true,
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
        }
      }
    });

    if (!playlist) {
      return null;
    }

    return {
      id: playlist.id,
      name: playlist.name,
      createdAt: playlist.createdAt,
      songs: playlist.songs.map(s => ({
        id: s.song.id,
        title: s.song.title,
        duration: s.song.duration,
        imageKey: s.song.imageKey,
        album: s.song.album,
        artists: s.song.artists.map(a => a.artist),
        addedAt: s.addedAt
      }))
    };
  }


  async findOwnershipById(playlistId: string) {

    return prisma.playlist.findUnique({

      where: { id: playlistId },

      select: {

        id: true,

        userId: true

      }

    })

  }


  async findByUserId(userId: string) {
      
      const playlists = await prisma.playlist.findMany({
      where: { userId },

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        name: true,
        createdAt: true,

        _count: {
          select: {
            songs: true,
          },
        },
      },
    });

    return playlists.map(p => ({
      id: p.id,
      name: p.name,
      createdAt: p.createdAt,
      songsCount: p._count.songs
    }))

  }


  async updateName(playlistId: string, name: string) {

    const playlist = await prisma.playlist.update({
      where: {id: playlistId},
      data: {name},
      select: {
        id: true,
        name: true,
        createdAt: true,

        _count: {
          select: {
            songs: true
          }
        }
      }
    });

    return {
      id: playlist.id,
      name: playlist.name,
      createdAt: playlist.createdAt,
      songsCount: playlist._count.songs
    }

  }

  async addSongToPlaylist(playlistId: string, songId: string) {
    return prisma.playlistSong.upsert({
      where: {
        playlistId_songId: {
          playlistId,
          songId,
        },
      },
      update: {},
      create: {
        playlistId,
        songId,
      },
    });
  }

  async removeSongFromPlaylist(playlistId: string, songId: string) {
    return prisma.playlistSong.delete({
      where: {
        playlistId_songId: {
          playlistId,
          songId,
        },
      },
    });
  }

  async delete(playlistId: string) {
    await prisma.playlist.delete({
      where: { id: playlistId },
    });
  }
}
