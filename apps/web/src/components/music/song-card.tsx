"use client";

import { useState } from "react";
import { Play, Music } from "lucide-react";
import Image from "next/image";

type SongCardProps = {
  title: string;
  artist: string;
  cover?: string;
};

export default function SongCard({ title, artist, cover }: SongCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-black/40 p-4 transition hover:bg-black/60">
      
      {/* Cover */}
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg bg-neutral-800">

        {cover && !imageError ? (
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Music size={28} className="text-muted" />
          </div>
        )}

        {/* Play Button */}
        <button className="absolute bottom-3 right-3 flex items-center justify-center rounded-full bg-primary p-2 text-white opacity-0 shadow-lg transition group-hover:opacity-100">
          <Play size={18} />
        </button>

      </div>

      {/* Song Info */}
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted">{artist}</p>
      </div>

    </div>
  );
}