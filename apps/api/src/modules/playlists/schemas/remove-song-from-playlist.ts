import {z} from "zod";

export const removeSongFromPlaylistSchema = z.object({
    params: z.object({
        
        playlistId: z
            .uuid("Invalid Playlist Id"),

        songId: z 
            .uuid("Invalid song Id")
    })
});