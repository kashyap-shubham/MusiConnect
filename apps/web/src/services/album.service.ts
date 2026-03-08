import { apiFetch } from "@/lib/api";

export async function getAlbums() {
  return apiFetch("/albums");
}

export async function getAlbum(id: string) {
  return apiFetch(`/albums/${id}`);
}

export async function getAlbumSongs(id: string) {
  return apiFetch(`/albums/${id}/songs`);
}

export async function createAlbum(data: {
  title: string;
  releaseDate: string;
  artistId: string;
}) {
  return apiFetch("/albums", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
