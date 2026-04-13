import { z } from "zod";

export const artistIdParamSchema = z.object({

  params: z.object({

    id: z
      .uuid("Invalid artist id")

  })

});