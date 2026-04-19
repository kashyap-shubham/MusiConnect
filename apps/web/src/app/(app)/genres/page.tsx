import Header from "@/components/app/Header";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import Link from "next/link";

interface Genre {

  id: string
  name: string

  color: string

}

const genres: Genre[] = [

  {
    id: "1",
    name: "Pop",
    color: "bg-pink-500"
  },

  {
    id: "2",
    name: "Hip Hop",
    color: "bg-purple-500"
  },

  {
    id: "3",
    name: "Rock",
    color: "bg-red-500"
  },

  {
    id: "4",
    name: "Electronic",
    color: "bg-blue-500"
  },

  {
    id: "5",
    name: "Jazz",
    color: "bg-yellow-500"
  },

  {
    id: "6",
    name: "Lo-fi",
    color: "bg-green-500"
  },

  {
    id: "7",
    name: "Indie",
    color: "bg-indigo-500"
  },

  {
    id: "8",
    name: "Classical",
    color: "bg-orange-500"
  },

];

export default function GenresPage() {

  return (

    <div className="p-10 space-y-8">

      {/* title */}
      <div>

        <h1 className="text-2xl font-semibold">

          Genres

        </h1>

        <p className="text-sm text-neutral-400 mt-1">

          Browse by genre

        </p>

      </div>


      <ErrorBoundary>

        <div
          className="
            grid
            grid-cols-4
            gap-6
          "
        >

          {genres.map((genre) => (

            <Link
              key={genre.id}
              href={`/genre/${genre.id}`}
            >

              <div
                className={`
                  ${genre.color}

                  h-28
                  rounded-xl

                  p-4

                  text-white
                  font-medium

                  flex
                  items-end

                  cursor-pointer
                `}
              >

                {genre.name}

              </div>

            </Link>

          ))}

        </div>

      </ErrorBoundary>

    </div>

  );

}