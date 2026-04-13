import { z } from "zod";

export const albumIdParamSchema = z.object({

  params: z.object({

    id: z
      .uuid("Invalid album id")

  })

});