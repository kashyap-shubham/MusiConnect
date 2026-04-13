import { z } from "zod";

export const updateAlbumSchema = z.object({

  params: z.object({

    id: z
      .uuid()

  }),

  body: z.object({

    title: z
      .string()
      .min(1)
      .max(255)
      .optional(),

    imageKey: z
      .string()
      .optional(),

    releaseDate: z
      .string()
      .datetime()
      .optional(),

    artistId: z
      .uuid()
      .optional()

  })

});


export type UpdateAlbumInput = z.infer<typeof updateAlbumSchema>["body"];