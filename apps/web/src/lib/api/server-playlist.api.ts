import { PlaylistDTO } from "@repo/types";
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
