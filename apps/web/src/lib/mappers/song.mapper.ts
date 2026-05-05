import { SongApiResponse } from "@/lib/api/server-songs.api";

// UI-friendly type (what your components use)
export type UISong = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
};

export function mapSongToUI(song: SongApiResponse): UISong {
  return {
    id: song.id,
    title: song.title,
    artist: song.artists?.[0]?.name || "Unknown",
    imageUrl: song.imageUrl,
    audioUrl: song.audioUrl,
    duration: song.duration,
  };
}

export function mapSongsToUI(songs: SongApiResponse[]): UISong[] {
  return songs.map(mapSongToUI);
}
