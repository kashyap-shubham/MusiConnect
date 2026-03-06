
import { apiFetch } from "@/lib/api";

export interface Album {
  id: string;
  title: string;
}

export async function getAlbums(): Promise<Album[]> {
  return apiFetch<Album[]>("/albums");
}