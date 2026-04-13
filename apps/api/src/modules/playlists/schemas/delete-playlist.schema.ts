import { z } from "zod";

export const deletePlaylistSchema = z.object({

  params: z.object({

    playlistId: z
      .uuid("Invalid playlist id")

  })

});