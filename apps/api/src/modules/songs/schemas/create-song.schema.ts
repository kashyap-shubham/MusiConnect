import { z } from "zod";

export const createSongSchema = z.object({

  body: z.object({

    title: z
      .string()
      .min(1, "Song title is required")
      .max(255),

    duration: z
      .number()
      .int()
      .positive("Duration must be positive"),

    audioKey: z
      .string()
      .min(1, "audioKey is required"),

    imageKey: z
      .string()
      .optional(),

    albumId: z
      .string()
      .uuid("Invalid album id")
      .optional(),

    artistIds: z
      .array(
        z.uuid("Invalid artist id")
      )
      .min(1, "At least one artist required")

  })

});

export type CreateSongInput = z.infer<typeof createSongSchema>["body"];