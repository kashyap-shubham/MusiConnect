import SongRow from "@/components/app/explore/SongRow"
import ErrorBoundary from "@/components/shared/ErrorBoundary"
import { getPlaylistDetailsServer } from "@/lib/api/server-playlist.api"
import { headers } from "next/headers"
import { notFound } from "next/navigation"



export default async function PlaylistPage({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;

  const cookie = (await headers()).get("cookie");

  if (!cookie) notFound();

  const playlist = await getPlaylistDetailsServer(cookie, id);

  if (!playlist) notFound();


  const songs = playlist.songs.map(song => ({

    id: song.id,
    title: song.title,
    artist:
      song.artists
        .map(a => a.name)
        .join(", "),
    imageUrl:
      song.imageKey
        ? `${process.env.NEXT_PUBLIC_CDN_URL}/${song.imageKey}`
        : "/placeholder.png",
    duration:
      formatDuration(song.duration)
  }))


  return (

    <div className="p-10 space-y-8">

      {/* header */}
      <div>
        
        <h1 className="text-2xl font-semibold">
          {playlist.name}
        </h1>

        <p className="text-sm text-neutral-400 mt-1">
          {playlist.songs.length} songs
        </p>

      </div>


      {/* songs list */}
      <ErrorBoundary>

        <div
          className="
            bg-neutral-900
            rounded-xl
            p-4
            space-y-1
          "
        >

          {songs.length === 0 ? (

            <p className="text-neutral-400">

              No songs in playlist

            </p>

          ) : (

            songs.map((song, i) => (

              <SongRow
                key={song.id}
                index={i + 1}
                song={song}
              />

            ))

          )}

        </div>

      </ErrorBoundary>

    </div>

  )

}



function formatDuration(seconds: number) {

  const m = Math.floor(seconds / 60);

  const s = seconds % 60;

  return `${m}:${s
    .toString()
    .padStart(2, "0")}`;

}