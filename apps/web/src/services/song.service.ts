import { apiFetch } from "@/lib/api";

export async function getSongs() {
  return apiFetch("/songs");
}

export async function getSong(id: string) {
  return apiFetch(`/songs/${id}`);
}