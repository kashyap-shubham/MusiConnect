import { FavouriteSongDTO } from "@repo/types";
import { serverApi } from "./http-server";



export async function getLikedSongsServer(cookie: string) {
  
    try {
    
    return await serverApi<FavouriteSongDTO[]>(
      "/favourites/songs",
      cookie,
    );

  } catch {
    return [];
  }

}
