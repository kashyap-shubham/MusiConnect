import { CreateSongInput } from "./schemas/create-song.schema";
import { SongRepository } from "./song.repository";
const CDN_URL = process.env.CDN_URL 

export class SongService {
    private repository: SongRepository;

   constructor() {
    this.repository = new SongRepository();
   } 

   async getAllSong() {
    return this.repository.findAll();
   }

   async getSongById(id: string) {
    const song = await this.repository.findById(id);

    if (!song) {
        throw new Error("Song not Found");
    }
    return song;
   }

   async createSong(data: CreateSongInput) {
     const song = await this.repository.create(data);

     return {
       id: song.id,
       title: song.title,
       duration: song.duration,
       audioUrl: `${CDN_URL}/${song.audioKey}`,

       artists: song.artists.map((a) => a.artist.name),

       album: song.album?.title,
     };
   }
}