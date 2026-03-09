"use client";

import Image from "next/image";
import { Play, Music, Shuffle, CheckCircle } from "lucide-react";
import { featuredArtist } from "@/app/(landing)/data/featured-artist";

export default function FeaturedArtist() {
  const artist = featuredArtist;

  return (
    <section className="relative py-28 overflow-hidden">

      {/* Gradient Background Glow */}
      <div className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Artist Artwork */}
          <div className="relative">

            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40">

              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
                <h2 className="text-4xl font-bold">{artist.name}</h2>

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

            {/* Player Controls */}
            <div className="flex items-center gap-4">

              <button className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-medium transition hover:scale-105 hover:opacity-90">
                <Play size={18} />
                Play
              </button>

              <button className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-muted transition hover:text-foreground">
                <Shuffle size={18} />
                Shuffle
              </button>

            </div>

            {/* Track List */}
            <div className="rounded-xl border border-border bg-white/5 backdrop-blur-md">

              {artist.songs.map((song, index) => (
                <div
                  key={song.id}
                  className="group flex items-center justify-between border-b border-border px-4 py-3 last:border-none transition hover:bg-white/5"
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