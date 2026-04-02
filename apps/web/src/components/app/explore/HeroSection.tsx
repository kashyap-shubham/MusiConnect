"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export interface HeroSectionProps {
  
  title: string
  subtitle?: string
  label?: string
  imageUrl: string

  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
}

export default function HeroSection({

  title,
  subtitle,
  label,
  imageUrl,
  onPrimaryAction,
  onSecondaryAction

}: HeroSectionProps) {
  return (
    <section
      className="
        relative
        w-full
        h-80
        overflow-hidden
        rounded-2xl
        flex
        bg-black
      "
    >
      {/* BLURRED BACKGROUND IMAGE */}
      <Image
        src={imageUrl}
        alt="background"
        fill
        priority
        className="
          object-cover
          scale-110
          blur-xl
          opacity-60"
      />

      {/* dark overlay */}
      <div
        className="
          absolute inset-0
          bg-black/20"
      />

      {/* LEFT CONTENT */}
      <div
        className="
          relative
          z-10
          w-[45%]
          flex
          flex-col
          justify-center
          px-10
        "
      >
        {label && <p className="text-sm text-neutral-300">{label}</p>}

        <h1 className="mt-2 text-5xl font-semibold tracking-tight">{title}</h1>

        {subtitle && <p className="mt-2 text-neutral-300">{subtitle}</p>}

        <div className="mt-6 flex gap-4">
          <button
            onClick={onPrimaryAction}
            className="
              rounded-full
              bg-indigo-500
              px-6 py-2
              text-sm font-medium
              hover:bg-indigo-400
              transition
            "
          >
            Listen Now
          </button>

          <button
            onClick={onSecondaryAction}
            className="
              flex items-center justify-center
              h-10 w-10
              rounded-full
              border border-neutral-500
              hover:bg-neutral-800
              transition
            "
          >
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-[55%] h-full z-10">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="
            object-cover
            object-right
          "
        />

        {/* fade blend */}
        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-black/70
            via-black/30
            to-transparent
          "
        />
      </div>
    </section>
  );
}