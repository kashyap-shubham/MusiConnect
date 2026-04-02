"use client";

import ArtistCard from "./ArtistCard";
import SectionHeader from "@/components/shared/SectionHeader";

export interface Artist {
  id: string
  name: string
  imageUrl: string
  monthlyListeners?: string
}

interface Props {
  artists: Artist[]
}

export default function TopArtistsSection({
  artists
}: Props) {

  return (

    <section className="space-y-4">

      <SectionHeader title="Top Artists" />

      {/* container panel */}
      <div
        className="
          bg-neutral-900
          rounded-xl
          p-4
        "
      >

        <div
          className="
            flex
            gap-4
            overflow-x-auto
            pb-2
          "
        >

          {artists.map((artist) => (

            <ArtistCard
              key={artist.id}
              artist={artist}
            />

          ))}

        </div>

      </div>

    </section>

  );
}