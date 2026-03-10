"use client";

import Image from "next/image";

type GenreCardProps = {
  name: string;
  image: string;
};

export default function GenreCard({ name, image }: GenreCardProps) {
  return (
    <div className="group relative h-40 overflow-hidden rounded-xl border border-border cursor-pointer">

      {/* Background Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition group-hover:from-black/30" />

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-lg font-semibold text-white">
        {name}
      </div>

    </div>
  );
}