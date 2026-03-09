"use client";

import { Play } from "lucide-react";
import Image from "next/image";

type SongCardProps = {
  title: string;
  artist: string;
  cover?: string;
};

export default function SongCard({ title, artist, cover }: SongCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-black/40 p-4 transition hover:bg-black/60">
      {/* Cover */}
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg bg-neutral-800">
        {cover ? (
          <Image src={cover} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted">
            No Image
          </div>
        )}

        {/* Play Button */}
        <button className="absolute bottom-3 right-3 hidden rounded-full bg-primary p-2 text-white group-hover:flex">
          <Play size={18} />
        </button>
      </div>

      {/* Song Info */}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted">{artist}</p>
      </div>
    </div>
  );
}
