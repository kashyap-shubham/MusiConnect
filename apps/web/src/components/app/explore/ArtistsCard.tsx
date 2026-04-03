import Image from "next/image";

interface Artist {

  id: string
  name: string
  imageUrl: string
  monthlyListeners?: string

}

interface Props {
  artist: Artist
}

export default function ArtistsCard({
  artist
}: Props) {

  return (

    <div
      className="
        min-w-30
        space-y-2
        cursor-pointer
        group
      "
    >

      {/* image */}
      <div
        className="
          relative
          h-22.5
          w-22.5
          rounded-lg
          overflow-hidden
          bg-neutral-800
        "
      >

        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="
            object-cover
            group-hover:scale-105
            transition
          "
        />

      </div>

      {/* name */}
      <div className="text-sm font-medium">
        {artist.name}
      </div>

      {/* plays */}
      {artist.monthlyListeners && (

        <div className="text-xs text-neutral-400">
          {artist.monthlyListeners}
        </div>

      )}

    </div>

  );
}