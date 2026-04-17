import { PlaylistDTO } from "@repo/types";

export async function getPlaylistsServer(cookie: string): Promise<PlaylistDTO[]> {

  try {
  
    const res = await fetch(
  
      `${process.env.API_URL}/playlists`,
  
      {
        headers: {
          cookie,
        },
  
        cache: "no-store",
      }
    );
  
    if (!res.ok) return [];
  
    const result = await res.json();
  
    return result.data;

  } catch {
    return [];
  }

}