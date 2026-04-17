import { PlaylistDTO } from "@repo/types";
import { api } from "./http-client";

export function createPlaylist(name: string): Promise<PlaylistDTO> {
  return api<PlaylistDTO>("/playlists", {
    method: "POST",
    body: JSON.stringify({
      name,
    }),
  });
}

export function renamePlaylist(
  playlistId: string,
  name: string,
): Promise<PlaylistDTO> {
  return api<PlaylistDTO>(`playlists/${playlistId}`, {
    method: "PATCH",
    body: JSON.stringify({
      name,
    }),
  });
}

export async function deletePlaylist(playlistId: string): Promise<void> {
  return api<void>(`playlists/${playlistId}`, {
    method: "DELETE",
  });
}
