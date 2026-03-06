import { apiFetch } from "@/lib/api";

export interface Album {
  id: string;
  title: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export async function getAlbums(): Promise<Album[]> {
  const res = await apiFetch<ApiResponse<Album[]>>("/albums");
  return res.data;
}
