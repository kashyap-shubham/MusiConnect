export interface PlaylistDTO {
  id: string;
  name: string;
  createdAt: string;
  songsCount: number;
}


export interface PlaylistSongDTO {
  id: string;
  title: string;
  duration: number;
  imageKey: string | null;
  addedAt: string;
  audioUrl: string;
  album: {
    id: string;
    title: string;
  } | null;

  artists: {
    id: string;
    name: string;
  } [];
}


export interface PlaylistDetailsDTO {
  id: string;
  name: string;
  createdAt: string;
  songs: PlaylistSongDTO[]
}