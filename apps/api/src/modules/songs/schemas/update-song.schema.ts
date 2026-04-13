import { z } from "zod";

export const updateSongSchema = z.object({

  params: z.object({

    id: z
      .uuid("Invalid song id")

  }),

  body: z.object({

    title: z
      .string()
      .min(1)
      .max(255)
      .optional(),

    duration: z
      .number()
      .int()
      .positive()
      .optional(),

    audioKey: z
      .string()
      .optional(),

    imageKey: z
      .string()
      .optional(),

    albumId: z
      .string()
      .uuid()
      .nullable()
      .optional(),

    artistIds: z
      .array(
        z.uuid()
      )
      .optional()

  })

});