import { apiFetch } from "@/lib/api"
import { Song, ApiResponse } from "@/types/song.types"

export async function getSongs(): Promise<Song[]> {
  const response = await apiFetch<ApiResponse<Song[]>>("/songs")
  return response.data
}

export async function getSong(id: string): Promise<Song> {
  const response = await apiFetch<ApiResponse<Song>>(`/songs/${id}`)
  return response.data
}


export async function createSong(data: {
  title: string
  duration: number
  audioKey: string
  albumId: string
  artistIds: string[]
}) {
  return apiFetch("/songs", {
    method: "POST",
    body: JSON.stringify(data),
  })
}