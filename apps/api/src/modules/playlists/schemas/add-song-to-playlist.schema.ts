import { z } from "zod";

export const addSongToPlaylistSchema = z.object({

  params: z.object({

    playlistId: z
      .uuid("Invalid playlist id")

  }),

  body: z.object({

    songId: z
      .uuid("Invalid song id")

  })

});


export type AddSongToPlaylistInput = z.infer<typeof addSongToPlaylistSchema>;