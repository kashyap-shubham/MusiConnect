import { z } from 'zod';

export const createSongSchema = z.object({
    title: z.string().min(1),
    duration: z.number().int().positive(),
    albumId: z.string().optional(),
    audioKey: z.string(),
    artistIds: z
    .array(z.string())
    .min(1, "At least one artist is required"),
});



export type CreateSongInput = z.infer<typeof createSongSchema>;