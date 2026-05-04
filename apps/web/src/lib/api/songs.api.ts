import { serverApi } from "./http-server";


export type SongApiResponse = {
  id: string;
  title: string;
  duration: number;
  audioUrl: string;
  imageUrl: string;
  artists: { id: string; name: string }[];
};

export async function getSongsServer(cookie: string) {
  return serverApi<SongApiResponse[]>("/api/songs", cookie);
}