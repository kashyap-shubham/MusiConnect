"use client";

import GenreCard from "@/components/music/genre-card";
import { mockGenres } from "@/app/(landing)/data/mock-genres";

export default function ExploreGenres() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Explore Music Libraries</h2>
        </div>

        {/* Genre Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockGenres.map((genre) => (
            <GenreCard key={genre.id} name={genre.name} image={genre.image} />
          ))}
        </div>
      </div>
    </section>
  );
}