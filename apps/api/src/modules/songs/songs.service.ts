import { SongRepository, SongEntity } from "./songs.repository";
import { CreateSongInput } from "./schemas/create-song.schema";
import { UpdateSongInput } from "./schemas/update-song.schema";
import { getMediaUrl } from "@/utils/media";

export class SongsService {

  private songRepository: SongRepository;

  constructor() {
    this.songRepository = new SongRepository();
  }

  // private mapper fn to map cdn url link of the song to song meta data
  private mapSong(song: SongEntity) {
    return {
      id: song.id,
      title: song.title,
      duration: song.duration,
      audioUrl: getMediaUrl(song.audioKey),
      imageUrl: getMediaUrl(song.imageKey),
      album: song.album,
      artists: song.artists.map(a => a.artist)
    };
  }

  async getAllSongs() {
    const songs = await this.songRepository.findAll();
    return songs.map(this.mapSong);
  }

  async getAllSongsPaginated(skip: number, take: number) {
    const {data, total} = await this.songRepository.findAllPaginated(skip, take);
    return({
      data: data.map(this.mapSong),
      total
    })
  }
  
  async getSongById(id: string) {
    const song = await this.songRepository.findById(id);
    if (!song) return null;
    return this.mapSong(song);
  }

  async createSong(data: CreateSongInput) {
    return this.songRepository.create(data);
  }

  async updateSong(id: string, data: UpdateSongInput) {
    return this.songRepository.update(id, data);
  }

  async deleteSong(id: string) {
    return this.songRepository.delete(id);
  }

}