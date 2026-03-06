import { apiFetch } from "@/lib/api";

export interface Artist {
  id: string;
  name: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export async function getArtists(): Promise<Artist[]> {
  const res = await apiFetch<ApiResponse<Artist[]>>("/artists");
  return res.data;
}
