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
        p-4
        text-sm
        font-semibold
        cursor-pointer
        hover:opacity-90
        transition
      "
      style={{
        backgroundColor: genre.color
      }}
    >

      {genre.name}

    </div>

  );

}