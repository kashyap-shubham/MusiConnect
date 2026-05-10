import ArtistsCard from "@/components/app/explore/ArtistsCard";
import ErrorBoundary from "@/components/shared/ErrorBoundary";

import Link from "next/link";

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
    name: "Drake",
    imageUrl: "/artists/artist3.jpg",
    monthlyListeners: "110M plays",
  },

  {
    id: "4",
    name: "The Weeknd",
    imageUrl: "/artists/artist4.jpg",
    monthlyListeners: "95M plays",
  },

  {
    id: "5",
    name: "Kanye West",
    imageUrl: "/artists/artist5.jpg",
    monthlyListeners: "70M plays",
  },

  {
    id: "6",
    name: "Post Malone",
    imageUrl: "/artists/artist6.jpg",
    monthlyListeners: "80M plays",
  },

  {
    id: "7",
    name: "Ariana Grande",
    imageUrl: "/artists/artist1.jpg",
    monthlyListeners: "88M plays",
  },

  {
    id: "8",
    name: "Ed Sheeran",
    imageUrl: "/artists/artist2.jpg",
    monthlyListeners: "99M plays",
  },

];

export default function ArtistsPage() {

  return (

    <div
      className="
        space-y-6

        sm:space-y-8
      "
    >

      {/* page title */}
      <div>

        <h1
          className="
            text-xl

            sm:text-2xl

            font-semibold
          "
        >

          Artists

        </h1>

        <p
          className="
            text-xs

            sm:text-sm

            text-neutral-400
            mt-1
          "
        >

          Browse all artists

        </p>

      </div>

      {/* grid */}
      <ErrorBoundary>

        <div
          className="
            grid

            grid-cols-2

            sm:grid-cols-3

            md:grid-cols-4

            xl:grid-cols-5

            gap-4

            sm:gap-5

            lg:gap-6
          "
        >

          {artists.map((artist) => (

            <Link
              key={artist.id}
              href={`/artist/${artist.id}`}
              className="min-w-0"
            >

              <ArtistsCard artist={artist} />

            </Link>

          ))}

        </div>

      </ErrorBoundary>

    </div>

  );

}