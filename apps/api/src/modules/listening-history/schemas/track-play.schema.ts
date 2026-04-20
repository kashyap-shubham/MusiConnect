import {z} from "zod";


export const trackPlaySchema = z.object({
    body: z.object({
        songId: z
            .uuid(),

        positionSeconds: z
            .number()
            .min(0)
            .optional(),
        
        durationPlayed: z
            .number()
            .min(0)
            .optional(),

        sessionId: z
            .string()
            .optional()
    }),
});


export type trackPlayInput = z.infer<typeof trackPlaySchema>["body"];