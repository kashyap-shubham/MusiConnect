import { apiFetch } from "@/lib/api";
import { Artist } from "@/types/artist.types";
import { ApiResponse } from "@/types/song.types";

export async function getArtists(): Promise<Artist[]> {
  return apiFetch<Artist[]>("/artists");
}

export async function getArtist(id: string) {
  const response = await apiFetch(`/artists/${id}`);

  return response;
}

export async function getArtistAlbums(id: string) {
  return apiFetch(`/artists/${id}/albums`);
}

export async function createArtist(data: { name: string; image?: string }) {
  return apiFetch("/artists", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
