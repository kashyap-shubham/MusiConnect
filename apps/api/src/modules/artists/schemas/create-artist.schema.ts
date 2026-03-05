import { z } from 'zod';

export const createArtist = z.object({
    name: z.string().min(1),
    image: z.url().optional(),
});

export type CreateArtistInput = z.infer<typeof createArtist>;