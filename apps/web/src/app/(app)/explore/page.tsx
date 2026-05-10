import GenresSection from "@/components/app/explore/GenresSection";
import HeroSection from "@/components/app/explore/HeroSection";
import TopArtistsSection from "@/components/app/explore/TopArtistsSection";
import TopChartsSection from "@/components/app/explore/TopChartsSection";
import PlayerCard from "@/components/app/player/PlayerCard";
import ErrorBoundary from "@/components/shared/ErrorBoundary";

import { headers } from "next/headers";

import { getSongsServer } from "@/lib/api/server-songs.api";
import { mapSongsToUI } from "@/lib/mappers/song.mapper";

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

export default async function ExplorePage() {
  const cookie = (await headers()).get("cookie") ?? "";

  const songsData = await getSongsServer(cookie);

  const topCharts = mapSongsToUI(songsData);

  return (
    <div className="space-y-6 lg:space-y-8">
      <HeroSection
        title="In My Feelings"
        subtitle="Camila Cabello · 63 Million Plays"
        label="Trending New Hits"
        imageUrl="/artists/artist1.jpg"
      />

      <div
        className="
          grid
          gap-6
          items-stretch

          grid-cols-1

          xl:grid-cols-[minmax(0,2fr)_1fr]
        "
      >
        <div className="space-y-6 min-w-0">
          <ErrorBoundary>
            <TopArtistsSection artists={artists} />
          </ErrorBoundary>

          <div
            className="
              grid
              gap-6

              grid-cols-1

              md:grid-cols-2
            "
          >
            <ErrorBoundary>
              <GenresSection genres={genres} />
            </ErrorBoundary>

            <ErrorBoundary>
              <TopChartsSection songs={topCharts} />
            </ErrorBoundary>
          </div>
        </div>

        <div className="min-w-0">
          <ErrorBoundary>
            <PlayerCard />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}