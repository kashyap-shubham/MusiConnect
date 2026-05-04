import GenresSection from "@/components/app/explore/GenresSection";
import HeroSection from "@/components/app/explore/HeroSection";
import TopArtistsSection from "@/components/app/explore/TopArtistsSection";
import TopChartsSection from "@/components/app/explore/TopChartsSection";
import Header from "@/components/app/Header";
import PlayerCard from "@/components/app/player/PlayerCard";
import ErrorBoundary from "@/components/shared/ErrorBoundary";


const artists = [
  {
    id: "1",
    name: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    monthlyListeners: "44M plays",
  },
  {
    id: "2",
    name: "Billie Eilish",
    imageUrl: "/artists/artist2.jpg",
    monthlyListeners: "203M plays",
  },
  {
    id: "3",
    name: "Kanye",
    imageUrl: "/artists/artist3.jpg",
    monthlyListeners: "1M plays",
  },
  {
    id: "4",
    name: "Kanye",
    imageUrl: "/artists/artist4.jpg",
    monthlyListeners: "15M plays",
  },
  {
    id: "5",
    name: "Kanye",
    imageUrl: "/artists/artist5.jpg",
    monthlyListeners: "155M plays",
  },
  {
    id: "6",
    name: "Kanye",
    imageUrl: "/artists/artist6.jpg",
    monthlyListeners: "150M plays",
  },
  {
    id: "7",
    name: "Kanye",
    imageUrl: "/artists/artist6.jpg",
    monthlyListeners: "150M plays",
  },
  {
    id: "8",
    name: "Kanye",
    imageUrl: "/artists/artist6.jpg",
    monthlyListeners: "150M plays",
  },
];


const genres = [
  { id: "1", name: "Pop", color: "bg-pink-500" },
  { id: "2", name: "Hip Hop", color: "bg-purple-500" },
  { id: "3", name: "Rock", color: "bg-red-500" },
  { id: "4", name: "EDM", color: "bg-blue-500" },
  { id: "5", name: "Jazz", color: "bg-yellow-500" },
  { id: "6", name: "Indie", color: "bg-green-500" },
  { id: "7", name: "Classical", color: "bg-orange-500" },
  { id: "8", name: "R&B", color: "bg-indigo-500" },
  { id: "9", name: "Lo-fi", color: "bg-teal-500" },
  { id: "10", name: "Metal", color: "bg-gray-500" },
];


const topCharts = [

  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    imageUrl: "/artists/artist1.jpg",
    duration: "3:22"
  },

  {
    id: "2",
    title: "As It Was",
    artist: "Harry Styles",
    imageUrl: "/artists/artist2.jpg",
    duration: "2:47"
  },

  {
    id: "3",
    title: "Starboy",
    artist: "The Weeknd",
    imageUrl: "/artists/artist3.jpg",
    duration: "3:50"
  },

  {
    id: "4",
    title: "Levitating",
    artist: "Dua Lipa",
    imageUrl: "/artists/artist4.jpg",
    duration: "3:12"
  },

  {
    id: "5",
    title: "Stay",
    artist: "Justin Bieber",
    imageUrl: "/artists/artist5.jpg",
    duration: "2:30"
  },

  {
    id: "6",
    title: "Peaches",
    artist: "Justin Bieber",
    imageUrl: "/artists/artist6.jpg",
    duration: "3:18"
  },

  {
    id: "7",
    title: "Save Your Tears",
    artist: "The Weeknd",
    imageUrl: "/artists/artist1.jpg",
    duration: "3:35"
  },

];


const playerSong = {

  id: "1",

  title: "Butterfly Effect",

  artist: "Travis Scott",

  imageUrl: "/artists/main.jpg",

  duration: 245,
  currentTime: 0,

};


export default function ExplorePage() {

  return (

    <div className="space-y-8">

      <HeroSection
        title="In My Feelings"
        subtitle="Camila Cabello · 63 Million Plays"
        label="Trending New Hits"
        imageUrl="/artists/artist1.jpg"
      />

      <div className="grid grid-cols-[minmax(0,2fr)_1fr] gap-6 items-stretch">

        <div className="space-y-6">

          <ErrorBoundary>
            <TopArtistsSection artists={artists} />
          </ErrorBoundary>

          <div className="grid grid-cols-2 gap-6">

            <ErrorBoundary>
              <GenresSection genres={genres} />
            </ErrorBoundary>

            <ErrorBoundary>
              <TopChartsSection songs={topCharts} />
            </ErrorBoundary>

          </div>

        </div>


        <ErrorBoundary>
          <PlayerCard />
        </ErrorBoundary>

      </div>

    </div>

  );

}