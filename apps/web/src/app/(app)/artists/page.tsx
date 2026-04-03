import Header from "@/components/app/Header";
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

    <div className="p-10 space-y-8">

      <Header />


      {/* page title */}
      <div>

        <h1 className="text-2xl font-semibold">

          Artists

        </h1>

        <p className="text-sm text-neutral-400 mt-1">

          Browse all artists

        </p>

      </div>


      {/* grid */}
      <ErrorBoundary>

        <div
          className="
            grid
            grid-cols-5
            gap-6
          "
        >

          {artists.map((artist) => (

            <Link
              key={artist.id}
              href={`/artist/${artist.id}`}
            >

              <ArtistsCard artist={artist} />

            </Link>

          ))}

        </div>

      </ErrorBoundary>

    </div>

  );

}