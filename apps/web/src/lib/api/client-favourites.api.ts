import { api } from "./http-client";



export async function toggleFavourite(

  entityType: "SONG" | "PLAYLIST",

  entityId: string

) {

  return api<{ isFavourite: boolean }>(

    "/favourites",

    {

      method: "POST",

      body: JSON.stringify({

        entityType,

        entityId

      })

    }

  );

}