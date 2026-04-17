import {z} from "zod";


export const updatePlaylistSchema = z.object({
    params: z.object({
        playlistId: z.uuid()
    }),

    body: z.object({
        name: z
            .string()
            .trim()
            .min(1, "Playlist name is required")
            .max(255, "Playlist name is too long"),
    })
});