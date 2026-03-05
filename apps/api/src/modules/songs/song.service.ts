import { SongRepository } from "./song.repository";

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
}