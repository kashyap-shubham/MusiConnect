import Image from "next/image";

interface Song {

  id: string
  title: string
  artist: string
  imageUrl: string
  duration?: string

}

interface Props {

  index: number
  song: Song

}

export default function SongRow({

  index,
  song

}: Props) {

  return (

    <div
      className="
        flex
        items-center
        gap-3
        p-2
        rounded-lg
        hover:bg-neutral-800
        transition
        cursor-pointer
      "
    >

      {/* number */}
      <div className="text-sm text-neutral-400 w-4">
        {index}
      </div>


      {/* cover */}
      <div className="relative h-10 w-10 rounded-md overflow-hidden bg-neutral-700">

        <Image
          src={song.imageUrl}
          alt={song.title}
          fill
          className="object-cover"
        />

      </div>


      {/* title */}
      <div className="flex-1 min-w-0">

        <div className="text-sm font-medium truncate">
          {song.title}
        </div>

        <div className="text-xs text-neutral-400 truncate">
          {song.artist}
        </div>

      </div>


      {/* duration */}
      {song.duration && (

        <div className="text-xs text-neutral-400">

          {song.duration}

        </div>

      )}

    </div>

  );

}