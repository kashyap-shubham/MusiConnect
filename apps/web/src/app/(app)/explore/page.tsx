import GenresSection from "@/components/app/explore/GenresSection";
import HeroSection from "@/components/app/explore/HeroSection";
import TopArtistsSection from "@/components/app/explore/TopArtistsSection";
import TopChartsSection from "@/components/app/explore/TopChartsSection";
import Header from "@/components/app/Header";
import SectionHeader from "@/components/shared/SectionHeader";

// temporary placeholders
// const GenresSection = () => (
//   <div className="bg-neutral-900 rounded-xl p-4 h-55">
//     <SectionHeader title="Genres" />
//   </div>
// );

// const TopChartsSection = () => (
//   <div className="bg-neutral-900 rounded-xl p-4 h-55">
//     <SectionHeader title="Top Charts" />
//   </div>
// );

const PlayerCard = () => (
  <div className="bg-neutral-900 rounded-xl p-4 h-full min-h-105">
    Player
  </div>
);


const artists = [
  {
    id: "1",
    name: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    monthlyListeners: "44M plays"
  },
  {
    id: "2",
    name: "Billie Eilish",
    imageUrl: "/artists/artist2.jpg",
    monthlyListeners: "203M plays"
  },
  {
    id: "3",
    name: "Kanye",
    imageUrl: "/artists/artist3.jpg",
    monthlyListeners: "1M plays"
  },
  {
    id: "4",
    name: "Kanye",
    imageUrl: "/artists/artist4.jpg",
    monthlyListeners: "15M plays"
  },
  {
    id: "5",
    name: "Kanye",
    imageUrl: "/artists/artist5.jpg",
    monthlyListeners: "155M plays"
  },
  {
    id: "6",
    name: "Kanye",
    imageUrl: "/artists/artist6.jpg",
    monthlyListeners: "150M plays"
  },
  
  
];


export default function ExplorePage() {

  return (

    <div className="p-10 space-y-8">

      <Header />

      <HeroSection
        title="In My Feelings"
        subtitle="Camila Cabello · 63 Million Plays"
        label="Trending New Hits"
        imageUrl="/artists/artist1.jpg"
      />


      {/* DASHBOARD GRID */}
      <div className="grid grid-cols-[minmax(0,2fr)_1fr] gap-6 items-start">


        {/* LEFT SIDE */}
        <div className="space-y-6">

          <TopArtistsSection artists={artists} />


          {/* genres + charts */}
          <div className="grid grid-cols-2 gap-6">

            <GenresSection />

            <TopChartsSection />

          </div>

        </div>


        {/* RIGHT SIDE */}
        <PlayerCard />

      </div>

    </div>

  );

}