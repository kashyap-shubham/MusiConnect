import { z } from "zod";

export const updateSongSchema = z.object({
  title: z.string().min(1).optional(),
  duration: z.number().int().positive().optional(),
  albumId: z.uuid().optional().nullable(),
  audioKey: z.string().optional(),

  artistIds: z.array(z.uuid()).optional(),
});

export type UpdateSongInput = z.infer<typeof updateSongSchema>;