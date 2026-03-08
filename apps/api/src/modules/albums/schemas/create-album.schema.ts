import { z } from "zod";

export const createAlbumSchema = z.object({
  title: z
    .string()
    .min(1, "Album title is required")
    .max(255),

  artistId: z
    .string(),
    // todo => in production enable this .uuid("Invalid artist id"),

  releaseDate: z
    .iso
    .datetime(),

  coverImageKey: z
    .string()
    .optional()
});

export type CreateAlbumInput = z.infer<typeof createAlbumSchema>;