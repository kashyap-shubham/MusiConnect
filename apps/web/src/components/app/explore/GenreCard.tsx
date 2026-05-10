interface Genre {

  id: string
  name: string
  color: string

}

interface Props {

  genre: Genre

}

export default function GenreCard({

  genre

}: Props) {

  return (

    <div
      className="
        rounded-lg

        p-3
        sm:p-4

        min-h-22
        sm:min-h-24

        flex
        items-end

        text-sm
        sm:text-base

        font-semibold

        cursor-pointer

        hover:opacity-90

        transition

        wrap-break-words
      "

      style={{
        backgroundColor: genre.color
      }}
    >

      {genre.name}

    </div>

  );

}