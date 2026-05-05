"use client";

import Image from "next/image";
import { usePlayerStore } from "@/store/player.store";

interface SongRowData {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string; // 🔥 required now
  duration: number; // 🔥 required now
}

interface Props {
  index: number;
  song: SongRowData;
  onClick?: () => void;
  rightSlot?: React.ReactNode;
}

export default function SongRow({
  index,
  song,
  onClick,
  rightSlot,
}: Props) {
  const { playSong } = usePlayerStore();

  const handleClick = () => {
    // if custom click provided → use it
    if (onClick) {
      onClick();
      return;
    }

    // default behavior → play song
    playSong({
      id: song.id,
      title: song.title,
      artist: song.artist,
      imageUrl: song.imageUrl,
      audioUrl: song.audioUrl,
      duration: song.duration,
    });
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
        gap-3
        p-2
        rounded-lg
        hover:bg-neutral-800
        transition
        cursor-pointer
      "
    >
      {/* index */}
      <div className="text-sm text-neutral-400 w-4">
        {index}
      </div>

      {/* cover */}
      <div className="relative h-10 w-10 rounded-md overflow-hidden bg-neutral-700">
        <Image
          src={song.imageUrl}
          alt={song.title}
          fill
          className="object-cover"
        />
      </div>

      {/* title */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">
          {song.title}
        </div>

        <div className="text-xs text-neutral-400 truncate">
          {song.artist}
        </div>
      </div>

      {/* right slot */}
      {rightSlot}

      {/* duration */}
      <div className="text-xs text-neutral-400 w-12 text-right">
        {formatTime(song.duration)}
      </div>
    </div>
  );
}