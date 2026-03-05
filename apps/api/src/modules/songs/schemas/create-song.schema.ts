import { z } from 'zod';

export const createSongSchema = z.object({
    title: z.string().min(1),
    duration: z.number().int().positive(),
    artistId: z.uuid(),
    albumId: z.uuid().optional(),
    audioKey: z.url(),
});



export type CreateSongInput = z.infer<typeof createSongSchema>;