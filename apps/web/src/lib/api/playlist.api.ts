import { api } from "./client";


export type Playlist = {
    id: string;
    name: string;
}

export async function getPlaylists(userId: string) {

    return api<Playlist>(`/playlists?userId=${userId}`)
}