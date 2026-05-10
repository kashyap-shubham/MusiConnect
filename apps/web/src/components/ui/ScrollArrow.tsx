"use client";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
  visible: boolean;
  active?: boolean;
}

export default function ScrollArrow({
  direction,
  onClick,
  visible,
  active = false,
}: Props) {

  if (!visible) return null;

  const isLeft = direction === "left";

  return (

    <div
      className={`
        absolute
        top-0
        bottom-0

        hidden
        sm:flex

        w-14
        lg:w-16

        items-center

        z-20

        pointer-events-none

        ${isLeft ? "left-0 justify-start" : "right-0 justify-end"}
      `}
    >

      {/* edge fade */}
      <div
        className={`
          absolute inset-0

          ${isLeft
            ? "bg-linear-to-r from-neutral-950 to-transparent"
            : "bg-linear-to-l from-neutral-950 to-transparent"
          }
        `}
      />

      <button
        onClick={onClick}

        className={`
          pointer-events-auto

          relative

          h-8 w-8

          lg:h-9
          lg:w-9

          mx-2

          rounded-full

          bg-white/10
          backdrop-blur-md

          border
          border-white/20

          text-white

          flex
          items-center
          justify-center

          shadow-lg
          shadow-black/40

          hover:bg-white/20
          hover:scale-105

          active:scale-95

          transition-all
          duration-200

          ${active
            ? "shadow-[0_0_20px_rgba(255,255,255,0.9)] border-white/60 bg-white/30"
            : ""
          }
        `}
      >

        {isLeft ? "←" : "→"}

      </button>

    </div>

  );
}