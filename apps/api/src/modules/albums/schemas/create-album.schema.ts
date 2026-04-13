import { z } from "zod";

export const createAlbumSchema = z.object({

  body: z.object({

    title: z
      .string()
      .min(1, "Album title required")
      .max(255),

    imageKey: z
      .string()
      .optional(),

    releaseDate: z
      .iso.datetime("Invalid release date"),

    artistId: z
      .uuid("Invalid artist id")

  })

});


export type CreateAlbumInput = z.infer<typeof createAlbumSchema>["body"];