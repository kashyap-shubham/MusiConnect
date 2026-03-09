"use client";

import SongCard from "@/components/music/song-card";

const mockSongs = [
  {
    id: 1,
    title: "Runaway",
    artist: "Aurora",
  },
  {
    id: 2,
    title: "Night Drive",
    artist: "Lunar Waves",
  },
  {
    id: 3,
    title: "Dreamscape",
    artist: "Nova",
  },
  {
    id: 4,
    title: "Echoes",
    artist: "SoundLab",
  },
];

export default function TrendingTracks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Hottest Tracks</h2>

          <button className="text-sm text-muted hover:text-foreground">
            View All
          </button>
        </div>

        {/* Songs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockSongs.map((song) => (
            <SongCard key={song.id} title={song.title} artist={song.artist} />
          ))}
        </div>
      </div>
    </section>
  );
}