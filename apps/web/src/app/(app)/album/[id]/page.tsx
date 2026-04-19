import Header from "@/components/app/Header";
import SongRow from "@/components/app/explore/SongRow";
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
    duration: "4:31"
  },

  {
    id: "2",
    title: "Sicko Mode",
    artist: "Travis Scott",
    imageUrl: "/artists/artist2.jpg",
    duration: "5:12"
  },

  {
    id: "3",
    title: "Butterfly Effect",
    artist: "Travis Scott",
    imageUrl: "/artists/artist3.jpg",
    duration: "3:55"
  },

  {
    id: "4",
    title: "No Bystanders",
    artist: "Travis Scott",
    imageUrl: "/artists/artist4.jpg",
    duration: "3:38"
  },

];

export default function AlbumPage() {

  return (

    <div className="p-10 space-y-8">


      {/* album header */}
      <div className="flex gap-6 items-center">

        <div
          className="
            relative
            w-40
            h-40

            rounded-xl
            overflow-hidden

            bg-neutral-800
          "
        >

          <Image
            src={album.imageUrl}
            alt={album.title}
            fill
            className="object-cover"
          />

        </div>


        <div>

          <p className="text-sm text-neutral-400">

            Album

          </p>

          <h1 className="text-3xl font-semibold mt-1">

            {album.title}

          </h1>

          <p className="text-neutral-400 mt-2">

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
            p-4
          "
        >

          {songs.map((song, i) => (

            <SongRow
              key={song.id}
              index={i + 1}
              song={song}
            />

          ))}

        </div>

      </ErrorBoundary>

    </div>

  );

}