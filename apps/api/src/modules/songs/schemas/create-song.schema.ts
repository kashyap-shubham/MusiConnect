import { z } from 'zod';

export const createSongSchema = z.object({
    title: z.string().min(1),
    duration: z.number().int().positive(),
    albumId: z.uuid().optional(),
    audioKey: z.url(),
    artistIds: z
    .array(z.uuid())
    .min(1, "At least one artist is required"),
});



export type CreateSongInput = z.infer<typeof createSongSchema>;