import { z } from "zod";

export const songIdParamSchema = z.object({

  params: z.object({

    id: z
      .uuid("Invalid song id")

  })

});