"use client";

import { ChevronUp, ChevronDown } from "lucide-react";

interface Props {
  direction: "up" | "down";
  onClick: () => void;
  visible: boolean;
  active?: boolean;
}

export default function VerticalScrollArrow({
  direction,
  onClick,
  visible,
  active = false,
}: Props) {

  if (!visible) return null;

  const isUp = direction === "up";

  return (

    <div
      className={`
        absolute
        right-1

        sm:right-2

        z-20
        pointer-events-none

        hidden
        sm:block

        ${isUp ? "top-2" : "bottom-2"}
      `}
    >

      {/* blend layer */}
      <div
        className={`
          absolute
          right-0

          w-12
          h-12

          sm:w-14
          sm:h-14

          pointer-events-none

          backdrop-blur-[2px]

          ${isUp
            ? "-top-1.5 bg-linear-to-b from-white/5 to-transparent"
            : "-bottom-1.5 bg-linear-to-t from-white/5 to-transparent"
          }
        `}
      />

      <button
        onClick={onClick}

        className={`
          pointer-events-auto

          h-7 w-7

          sm:h-8
          sm:w-8

          rounded-full

          bg-white/10
          backdrop-blur-md

          border border-white/20

          text-white

          flex
          items-center
          justify-center

          shadow-lg shadow-black/30

          transition-all duration-300

          hover:bg-white/20
          hover:scale-105

          ${active
            ? "shadow-[0_0_18px_rgba(255,255,255,0.8)] border-white/60 bg-white/20"
            : ""
          }
        `}
      >

        {isUp
          ? <ChevronUp size={16} />
          : <ChevronDown size={16} />
        }

      </button>

    </div>

  );
}