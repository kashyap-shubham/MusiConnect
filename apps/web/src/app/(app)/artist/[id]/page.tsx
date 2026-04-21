import Header from "@/components/app/Header";
import SongRow from "@/components/app/SongRow";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Image from "next/image";

const artist = {
  id: "1",

  name: "Travis Scott",

  imageUrl: "/artists/main.jpg",

  monthlyListeners: "45M monthly listeners",
};

const songs = [
  {
    id: "1",
    title: "Goosebumps",
    artist: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    duration: "4:03",
  },

  {
    id: "2",
    title: "Sicko Mode",
    artist: "Travis Scott",
    imageUrl: "/artists/artist2.jpg",
    duration: "5:12",
  },

  {
    id: "3",
    title: "Butterfly Effect",
    artist: "Travis Scott",
    imageUrl: "/artists/artist3.jpg",
    duration: "3:55",
  },

  {
    id: "4",
    title: "Highest in the Room",
    artist: "Travis Scott",
    imageUrl: "/artists/artist4.jpg",
    duration: "2:55",
  },

  {
    id: "5",
    title: "Antidote",
    artist: "Travis Scott",
    imageUrl: "/artists/artist5.jpg",
    duration: "4:22",
  },
];

export default function ArtistPage() {
  return (
    <div className="p-10 space-y-8">
      {/* artist header */}
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
            src={artist.imageUrl}
            alt={artist.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm text-neutral-400">Artist</p>

          <h1 className="text-3xl font-semibold mt-1">{artist.name}</h1>

          <p className="text-neutral-400 mt-2">{artist.monthlyListeners}</p>
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
          <p className="text-lg font-semibold mb-3">Popular</p>

          {songs.map((song, i) => (
            <SongRow key={song.id} index={i + 1} song={song} />
          ))}
        </div>
      </ErrorBoundary>
    </div>
  );
}
