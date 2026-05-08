import SongRow from "@/components/app/SongRow";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import HeartButton from "@/components/ui/HeartButton";
import { getLikedSongsServer } from "@/lib/api/server-favourites.api";
import { headers } from "next/headers";

// const likedSongs = [
//   {
//     id: "1",
//     title: "Blinding Lights",
//     artist: "The Weeknd",
//     imageUrl: "/artists/artist1.jpg",
//     duration: "3:22",
//   },

//   {
//     id: "2",
//     title: "As It Was",
//     artist: "Harry Styles",
//     imageUrl: "/artists/artist2.jpg",
//     duration: "2:47",
//   },

//   {
//     id: "3",
//     title: "Starboy",
//     artist: "The Weeknd",
//     imageUrl: "/artists/artist3.jpg",
//     duration: "3:50",
//   },

//   {
//     id: "4",
//     title: "Levitating",
//     artist: "Dua Lipa",
//     imageUrl: "/artists/artist4.jpg",
//     duration: "3:12",
//   },

//   {
//     id: "5",
//     title: "Stay",
//     artist: "Justin Bieber",
//     imageUrl: "/artists/artist5.jpg",
//     duration: "2:30",
//   },

//   {
//     id: "6",
//     title: "Peaches",
//     artist: "Justin Bieber",
//     imageUrl: "/artists/artist6.jpg",
//     duration: "3:18",
//   },

//   {
//     id: "7",
//     title: "Save Your Tears",
//     artist: "The Weeknd",
//     imageUrl: "/artists/artist1.jpg",
//     duration: "3:35",
//   },
// ];


export default async function LikedPage() {

  const cookie = (await headers()).get("cookie");

  if (!cookie) {
    return null;
  }

  const likedSongs = await getLikedSongsServer(cookie);

  const songs = likedSongs.map((song, i) => ({
    id: song.id,
    title: song.title,
    artist: song.artists.map(a => a.name).join(", "),

    imageUrl: song.imageKey ? `${process.env.NEXT_PUBLIC_CDN_URL}/${song.imageKey}` : "/placeholder.png",
    audioUrl: song.audioUrl,
    duration: song.duration
  }));



  return (
    <div className="p-10 space-y-8">
      {/* page header */}
      <div>
        <h1 className="text-2xl font-semibold">Liked Songs</h1>

        <p className="text-sm text-neutral-400 mt-1">Your favourite tracks</p>
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
          {songs.length === 0 ? (<p className="text-neutral-400"> No liked songs yet</p>) : (
            songs.map((song, i) => (
              <SongRow
                key={song.id}
                index={i + 1}
                song={song}
                rightSlot={
                  <HeartButton
                    songId={song.id}
                    initialState={true}
                  />
                }
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

  return `${m}: ${s.toString().padStart(2, "0")}`;
}
