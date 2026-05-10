import SongRow from "@/components/app/SongRow";

import ErrorBoundary from "@/components/shared/ErrorBoundary";

import { headers } from "next/headers";

import { getRecentSongsServer } from "@/lib/api/server-recent.song.api";

export default async function RecentPage() {

  const cookie = (await headers()).get("cookie");

  if (!cookie) return null;

  const recentSongs = await getRecentSongsServer(cookie);

  const songs = recentSongs.map((song, i) => ({

    id: song.id,

    title: song.title,

    artist: song.artists.map((a) => a.name).join(", "),

    imageUrl: song.imageKey
      ? `${process.env.NEXT_PUBLIC_CDN_URL}/${song.imageKey}`
      : "/placeholder.png",

    audioUrl: song.audioUrl,

    duration: song.duration,

  }));

  return (

    <div
      className="
        space-y-6

        sm:space-y-8
      "
    >

      {/* title */}
      <div>

        <h1
          className="
            text-xl

            sm:text-2xl

            lg:text-3xl

            font-semibold
          "
        >

          Recently Played

        </h1>

        <p
          className="
            text-xs

            sm:text-sm

            text-neutral-400
            mt-1
          "
        >

          Your recent listening activity

        </p>

      </div>

      {/* songs list */}
      <ErrorBoundary>

        <div
          className="
            bg-neutral-900
            rounded-xl

            p-3

            sm:p-4

            space-y-1
          "
        >

          {songs.length === 0 ? (

            <p
              className="
                text-sm
                text-neutral-400
              "
            >

              No listening history yet

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

  );

}

function formatDuration(seconds: number) {

  const m = Math.floor(seconds / 60);

  const s = seconds % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;

}