import Header from "@/components/app/Header";
import SongRow from "@/components/app/SongRow";

const genre = {
  id: "1",
  name: "Hip Hop",
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
