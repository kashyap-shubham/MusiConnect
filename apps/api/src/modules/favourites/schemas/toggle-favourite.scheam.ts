import { z } from "zod";


export const toggleFavouriteSchema = z.object({
    body: z.object({
        entityType: z.enum(["SONG", "PLAYLIST"]),

        entityId: z
            .uuid()
    }),
});



export type ToggleFavouriteInput = z.infer<typeof toggleFavouriteSchema>["body"];


