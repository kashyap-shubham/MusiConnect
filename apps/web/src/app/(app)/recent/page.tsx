import Header from "@/components/app/Header";
import SongRow from "@/components/app/explore/SongRow";
import ErrorBoundary from "@/components/shared/ErrorBoundary";


const recentSongs = [

  {
    id: "1",
    title: "Sicko Mode",
    artist: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    duration: "5:12"
  },

  {
    id: "2",
    title: "Blinding Lights",
    artist: "The Weeknd",
    imageUrl: "/artists/artist2.jpg",
    duration: "3:22"
  },

  {
    id: "3",
    title: "Levitating",
    artist: "Dua Lipa",
    imageUrl: "/artists/artist3.jpg",
    duration: "3:12"
  },

  {
    id: "4",
    title: "Stay",
    artist: "Justin Bieber",
    imageUrl: "/artists/artist4.jpg",
    duration: "2:30"
  },

  {
    id: "5",
    title: "Peaches",
    artist: "Justin Bieber",
    imageUrl: "/artists/artist5.jpg",
    duration: "3:18"
  },

  {
    id: "6",
    title: "Save Your Tears",
    artist: "The Weeknd",
    imageUrl: "/artists/artist6.jpg",
    duration: "3:35"
  },

];


export default function RecentPage() {

  return (

    <div className="p-10 space-y-8">

      <Header />


      {/* page title */}
      <div>

        <h1 className="text-2xl font-semibold">

          Recently Played

        </h1>

        <p className="text-sm text-neutral-400 mt-1">

          Your recent listening activity

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

          {recentSongs.map((song, i) => (

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