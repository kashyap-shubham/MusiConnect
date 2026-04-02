"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import GenreCard from "./GenreCard";

const genres = [

  { id: "1", name: "Dance Beat", color: "#334155" },

  { id: "2", name: "Electro Pop", color: "#78716c" },

  { id: "3", name: "Alternative Indie", color: "#92400e" },

  { id: "4", name: "Hip Hop", color: "#065f46" },

  { id: "5", name: "Classical Period", color: "#7c3aed" },

  { id: "6", name: "Hip Hop Rap", color: "#1d4ed8" },

];

export default function GenresSection() {

  return (

    <section className="space-y-4 self-start">

      <SectionHeader title="Genres" />

      <div className="grid grid-cols-2 gap-3">

        {genres.map((genre) => (

          <GenreCard
            key={genre.id}
            genre={genre}
          />

        ))}

      </div>

    </section>

  );
}