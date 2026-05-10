"use client";

import Image from "next/image";

import { usePlayerStore } from "@/store/player.store";

interface SongRowData {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
}

interface Props {
  index: number;
  song: SongRowData;
  onClick?: () => void;
  rightSlot?: React.ReactNode;
  allSongs?: SongRowData[];
  songIndex?: number;
}

export default function SongRow({
  index,
  song,
  onClick,
  rightSlot,
  allSongs,
  songIndex,
}: Props) {

  const setQueue = usePlayerStore((s) => s.setQueue);

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    if (allSongs && typeof songIndex === "number") {
      setQueue(allSongs, songIndex);
    } else {
      setQueue([song], 0);
    }
  };

  function formatTime(seconds: number) {
    if (!seconds || isNaN(seconds)) return "--:--";

    const m = Math.floor(seconds / 60);

    const s = Math.floor(seconds % 60);

    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <div
      onClick={handleClick}

      className="
        flex
        items-center

        gap-2
        sm:gap-3

        p-2

        rounded-lg

        hover:bg-neutral-800

        transition
        cursor-pointer

        min-w-0
      "
    >
      {/* index */}
      <div
        className="
          text-xs
          sm:text-sm

          text-neutral-400

          w-4
          shrink-0
        "
      >
        {index}
      </div>

      {/* image */}
      <div
        className="
          relative

          h-9 w-9

          sm:h-10
          sm:w-10

          rounded-md
          overflow-hidden

          bg-neutral-700

          shrink-0
        "
      >
        <Image
          src={song.imageUrl}
          alt={song.title}
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>

      {/* song info */}
      <div className="flex-1 min-w-0">
        <div
          className="
            text-sm
            font-medium
            truncate
          "
        >
          {song.title}
        </div>

        <div
          className="
            text-xs
            text-neutral-400
            truncate
          "
        >
          {song.artist}
        </div>
      </div>

      {/* right slot */}
      {rightSlot && (
        <div className="shrink-0">
          {rightSlot}
        </div>
      )}

      {/* duration */}
      <div
        className="
          text-[11px]
          sm:text-xs

          text-neutral-400

          w-10
          sm:w-12

          text-right

          shrink-0
        "
      >
        {formatTime(song.duration)}
      </div>
    </div>
  );
}