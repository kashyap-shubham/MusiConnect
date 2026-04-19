import Header from "@/components/app/Header";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Link from "next/link";
import Image from "next/image";

interface Album {

  id: string
  title: string
  artist: string

  imageUrl: string

  year: number

}

const albums: Album[] = [

  {
    id: "1",
    title: "Astroworld",
    artist: "Travis Scott",
    imageUrl: "/artists/artist1.jpg",
    year: 2018
  },

  {
    id: "2",
    title: "After Hours",
    artist: "The Weeknd",
    imageUrl: "/artists/artist2.jpg",
    year: 2020
  },

  {
    id: "3",
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    imageUrl: "/artists/artist3.jpg",
    year: 2021
  },

  {
    id: "4",
    title: "Scorpion",
    artist: "Drake",
    imageUrl: "/artists/artist4.jpg",
    year: 2018
  },

  {
    id: "5",
    title: "Justice",
    artist: "Justin Bieber",
    imageUrl: "/artists/artist5.jpg",
    year: 2021
  },

  {
    id: "6",
    title: "Divide",
    artist: "Ed Sheeran",
    imageUrl: "/artists/artist6.jpg",
    year: 2017
  },

];

export default function AlbumsPage() {

  return (

    <div className="p-10 space-y-8">

      {/* title */}
      <div>

        <h1 className="text-2xl font-semibold">

          Albums

        </h1>

        <p className="text-sm text-neutral-400 mt-1">

          Browse all albums

        </p>

      </div>


      <ErrorBoundary>

        <div
          className="
            grid
            grid-cols-5
            gap-6
          "
        >

          {albums.map((album) => (

            <Link
              key={album.id}
              href={`/album/${album.id}`}
            >

              <div
                className="
                  space-y-2
                  cursor-pointer
                "
              >

                <div
                  className="
                    relative
                    w-full
                    aspect-square

                    rounded-xl
                    overflow-hidden

                    bg-neutral-800
                  "
                >

                  <Image
                    src={album.imageUrl}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />

                </div>


                <div>

                  <div className="text-sm font-medium">

                    {album.title}

                  </div>

                  <div className="text-xs text-neutral-400">

                    {album.artist} • {album.year}

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </ErrorBoundary>

    </div>

  );

}