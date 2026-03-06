
import { apiFetch } from "@/lib/api";

export interface Artist {
  id: string;
  name: string;
}

export async function getArtists(): Promise<Artist[]> {
  return apiFetch<Artist[]>("/artists");
}