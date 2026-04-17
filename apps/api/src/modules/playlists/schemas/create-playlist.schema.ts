import { z } from "zod";

export const createPlaylistSchema = z.object({

  body: z.object({

    name: z
      .string()
      .trim()
      .min(1, "Playlist name is required")
      .max(255, "Playlist name too long"),
  })

});


export type CreatePlaylistInput =z.infer<typeof createPlaylistSchema>["body"];