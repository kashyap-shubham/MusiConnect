export interface FavouriteSongDTO {
  id: string;

  title: string;

  duration: number;

  imageKey: string | null;

  album: {
    id: string;
    title: string;
  } | null;

  artists: {
    id: string;
    name: string;
  }[];
  
}