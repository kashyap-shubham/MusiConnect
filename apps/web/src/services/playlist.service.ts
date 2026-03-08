import { apiFetch } from "@/lib/api";

export async function getPlaylists(userId: string) {
  return apiFetch(`/playlists?userId=${userId}`);
}

export async function getPlaylist(id: string) {
  return apiFetch(`/playlists/${id}`);
}

export async function createPlaylist(data: {
  name: string;
  userId: string;
}) {
  return apiFetch("/playlists", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function addSongToPlaylist(
  playlistId: string,
  songId: string
) {
  return apiFetch(`/playlists/${playlistId}/songs`, {
    method: "POST",
    body: JSON.stringify({ songId }),
  });
}

export async function removeSongFromPlaylist(
  playlistId: string,
  songId: string
) {
  return apiFetch(`/playlists/${playlistId}/songs/${songId}`, {
    method: "DELETE",
  });
}