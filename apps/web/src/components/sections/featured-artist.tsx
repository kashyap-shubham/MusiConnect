"use client";

import Image from "next/image";
import { Play, Music, Shuffle, CheckCircle } from "lucide-react";
import { featuredArtist } from "@/app/(landing)/data/featured-artist";

export default function FeaturedArtist() {
  const artist = featuredArtist;

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Artist Image */}
          <div className="relative">

            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-lg">

              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Artist Info */}
          <div className="space-y-8">

            {/* Header */}
            <div className="space-y-3">

              <p className="text-sm uppercase tracking-wider text-muted">
                Featured Artist
              </p>

              <div className="flex items-center gap-3">
                <h2 className="text-4xl font-semibold">
                  {artist.name}
                </h2>

                {artist.verified && (
                  <CheckCircle size={20} className="text-primary" />
                )}
              </div>

              <p className="text-sm text-muted">
                {artist.monthlyListeners}
              </p>

              <p className="max-w-md text-muted">
                {artist.description}
              </p>

            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">

              <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-medium transition hover:scale-105">
                <Play size={18} />
                Play
              </button>

              <button className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-muted transition hover:text-foreground">
                <Shuffle size={18} />
                Shuffle
              </button>

            </div>

            {/* Track List */}
            <div className="rounded-xl border border-border bg-white shadow-sm">

              {artist.songs.map((song, index) => (
                <div
                  key={song.id}
                  className="group flex items-center justify-between border-b border-border px-4 py-3 last:border-none transition hover:bg-zinc-50"
                >

                  {/* Left */}
                  <div className="flex items-center gap-4">

                    {/* Track number / play */}
                    <div className="w-5 text-sm text-muted">

                      <span className="group-hover:hidden">
                        {index + 1}
                      </span>

                      <Play
                        size={16}
                        className="hidden text-primary group-hover:block"
                      />

                    </div>

                    <Music size={18} className="text-muted" />

                    <span className="font-medium">
                      {song.title}
                    </span>

                  </div>

                  {/* Duration */}
                  <span className="text-sm text-muted">
                    {song.duration}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}