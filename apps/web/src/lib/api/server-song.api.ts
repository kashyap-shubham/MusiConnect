import { RecentSongDTO } from "@repo/types";
import { serverApi } from "./http-server";


export async function getRecentSongsServer(
    cookie: string,  
): Promise<RecentSongDTO[]> {

    try {
        return await serverApi<RecentSongDTO[]>("/songs/recent", cookie); 
    } catch {
        return [];
    }
    
}