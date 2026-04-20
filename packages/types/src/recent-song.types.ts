export interface RecentSongDTO {

  id: string;

  title: string;

  duration: number;

  imageKey: string | null;

  playedAt: string;

  album: {
    id: string;
    title: string;
  } | null;

  artists: {
    id: string;
    name: string;
  }[];

}