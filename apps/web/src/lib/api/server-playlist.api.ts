import { PlaylistDetailsDTO, PlaylistDTO } from "@repo/types";
import { serverApi } from "./http-server";

export async function getPlaylistsServer(
  cookie: string,
): Promise<PlaylistDTO[]> {
  try {
    return await serverApi<PlaylistDTO[]>("/playlists", cookie);
  } catch {
    return [];
  }
}


export async function getPlaylistDetailsServer(cookie: string, playlistId: string): Promise<PlaylistDetailsDTO | null> {

  try {
    const res = await fetch(`${process.env.API_URL}/playlists/${playlistId}`,
      {
        headers: {
          cookie
        },
        cache: "no-store"
      }
    );

    if (!res.ok) return null;

    const result = await res.json();

    return result.data;

  } catch {
    return null;
  }
}
