import { z } from "zod";

export const updateArtistSchema = z.object({

  params: z.object({

    id: z
      .string()
      .uuid("Invalid artist id")

  }),

  body: z.object({

    name: z
      .string()
      .min(1)
      .max(120)
      .optional(),

    image: z
      .string()
      .optional()

  })

});

export type UpdateArtistInput = z.infer<typeof updateArtistSchema>["body"];
