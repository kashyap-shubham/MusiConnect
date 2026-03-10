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
    <div className="group relative overflow-hidden rounded-xl border border-border bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg">
      {/* Cover */}
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg bg-zinc-100">
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
        <button
          className="absolute bottom-3 right-3 flex items-center justify-center rounded-full bg-primary p-2
          text-white opacity-0 translate-y-2 shadow-lg transition group-hover:opacity-100 group-hover:translate-y-0" >
          <Play size={18} />
        </button>
      </div>

      {/* Song Info */}
      <div className="space-y-1">
        <p className="font-medium text-zinc-900">{title}</p>
        <p className="text-sm text-muted">{artist}</p>
      </div>
    </div>
  );
}
