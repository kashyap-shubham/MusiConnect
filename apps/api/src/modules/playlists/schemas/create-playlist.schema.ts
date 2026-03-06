import { z } from "zod";

export const createPlaylistSchema = z.object({
  name: z
    .string()
    .min(1, "Playlist name is required")
    .max(255),

  userId: z
    .uuid("Invalid user id"),
});

export type CreatePlaylistInput = z.infer<typeof createPlaylistSchema>;