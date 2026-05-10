import SongRow from "@/components/app/SongRow";

import ErrorBoundary from "@/components/shared/ErrorBoundary";

import Image from "next/image";

const album = {

  id: "1",

  title: "Astroworld",

  artist: "Travis Scott",

  year: 2018,

  imageUrl: "/artists/main.jpg",

};

const songs = [

  {
    id: "1",
    title: "Stargazing",
    artist: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    audioUrl: "/songs/stargazing.mp3",
    duration: 271,
  },

  {
    id: "2",
    title: "Sicko Mode",
    artist: "Travis Scott",
    imageUrl: "/artists/artist2.jpg",
    audioUrl: "/songs/sickomode.mp3",
    duration: 312,
  },

  {
    id: "3",
    title: "Butterfly Effect",
    artist: "Travis Scott",
    imageUrl: "/artists/artist3.jpg",
    audioUrl: "/songs/butterflyeffect.mp3",
    duration: 235,
  },

  {
    id: "4",
    title: "No Bystanders",
    artist: "Travis Scott",
    imageUrl: "/artists/artist4.jpg",
    audioUrl: "/songs/nobystanders.mp3",
    duration: 218,
  },

];

export default function AlbumPage() {

  return (

    <div
      className="
        space-y-6

        sm:space-y-8
      "
    >

      {/* album header */}
      <div
        className="
          flex

          flex-col
          items-center
          text-center

          sm:flex-row
          sm:items-center
          sm:text-left

          gap-5
          sm:gap-6
        "
      >

        <div
          className="
            relative

            w-32
            h-32

            sm:w-40
            sm:h-40

            rounded-xl
            overflow-hidden

            bg-neutral-800

            shrink-0
          "
        >

          <Image
            src={album.imageUrl}
            alt={album.title}
            fill
            sizes="(max-width: 640px) 128px, 160px"
            className="object-cover"
          />

        </div>

        <div className="min-w-0">

          <p
            className="
              text-xs

              sm:text-sm

              text-neutral-400
            "
          >

            Album

          </p>

          <h1
            className="
              mt-1

              text-2xl

              sm:text-3xl

              lg:text-4xl

              font-semibold

              wrap-break-words
            "
          >

            {album.title}

          </h1>

          <p
            className="
              text-sm

              sm:text-base

              text-neutral-400
              mt-2
            "
          >

            {album.artist} • {album.year}

          </p>

        </div>

      </div>

      {/* songs */}
      <ErrorBoundary>

        <div
          className="
            bg-neutral-900
            rounded-xl

            p-3

            sm:p-4
          "
        >

          <div className="space-y-1">

            {songs.map((song, i) => (

              <SongRow
                key={song.id}
                index={i + 1}
                song={song}
              />

            ))}

          </div>

        </div>

      </ErrorBoundary>

    </div>

  );

}