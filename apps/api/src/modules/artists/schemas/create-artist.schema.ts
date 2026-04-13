import { z } from "zod";

export const createArtistSchema = z.object({

  body: z.object({

    name: z
      .string()
      .min(1, "Artist name required")
      .max(120),

    image: z
      .string()
      .optional()

  })

});

export type CreateArtistInput = z.infer<typeof createArtistSchema>["body"];