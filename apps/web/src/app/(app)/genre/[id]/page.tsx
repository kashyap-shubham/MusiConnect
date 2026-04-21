import Header from "@/components/app/Header";
import SongRow from "@/components/app/SongRow";

const genre = {
  id: "1",
  name: "Hip Hop",
};

const songs = [
  {
    id: "1",
    title: "Sicko Mode",
    artist: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    duration: "5:12",
  },

  {
    id: "2",
    title: "God's Plan",
    artist: "Drake",
    imageUrl: "/artists/artist2.jpg",
    duration: "3:18",
  },

  {
    id: "3",
    title: "HUMBLE",
    artist: "Kendrick Lamar",
    imageUrl: "/artists/artist3.jpg",
    duration: "2:57",
  },
];

export default function GenrePage() {
  return (
    <div className="p-10 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">{genre.name}</h1>

        <p className="text-neutral-400 mt-1">Songs in this genre</p>
      </div>

      <div className="bg-neutral-900 rounded-xl p-4">
        {songs.map((song, i) => (
          <SongRow key={song.id} index={i + 1} song={song} />
        ))}
      </div>
    </div>
  );
}
