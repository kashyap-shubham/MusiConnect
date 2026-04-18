import { getPlaylistDetailsServer } from "@/lib/api/server-playlist.api";
import { headers } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";


export default async function PlaylistPage({
    params
}: {
    params: Promise<{id: string}>
}) {
    
    const cookie = (await headers()).get("cookie");
    
    const {id } = await params;
    
    if (!cookie) {
        notFound();
    }

    const playlist = await getPlaylistDetailsServer(cookie, id);

    if (!playlist) {
        notFound();
    }

    return (
        <div className="space-y-8">

            {/* header */}
            <div>
                <p className="text-sm text-white/40"> Playlist </p> 
                <h1 className="text-3xl font-semibold mt-1"> {playlist.name} </h1>
                <p className="text-sm text-white/40 mt-2">{playlist.songs.length}</p>
            </div>

            {/* songs */}
            {playlist.songs.length === 0 ? (<p className="text-white/40"> No Songss in playlist</p>) :
            (<div className="space-y-2">
                {playlist.songs.map((song) => (
                    <div key={song.id} className="flex items-center gap-4 p-2 hover:bg-white/5 rounded-md transition">
                        
                        {/* image */}
                        <div className="w-12 h-12 bg-white/10 rounded-md shrink-0">
                            {song.imageKey && 
                            (<Image 
                                alt={`${song.title}`} 
                                src={`${process.env.NEXT_PUBLIC_CDN_URL}/${song.imageKey}`}
                                width={48}
                                height={48}
                                className="object-cover rounded-md" />
                            )}
                        </div>

                        {/* title */}
                        <div className="flex-1">
                            <p className="text-sm">{song.title}</p>
                            <p className="text-xs text-white/40">
                                {song.artists.map(a => a.name).join(", ")}
                            </p>
                        </div>

                        {/* duration */}
                        <p className="text-xs text-white/40">
                            {formatDuration(song.duration)}
                        </p>

                    </div>
                )
            )}
        </div>
        )}
    </div>
    )
}


function formatDuration(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return `${m}: ${s.toString().padStart(2, "0")}`
}