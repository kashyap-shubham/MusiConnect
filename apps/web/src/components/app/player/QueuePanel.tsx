"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { usePlayerStore } from "@/store/player.store";

interface Props {
  onClose: () => void;
}

export default function QueuePanel({ onClose }: Props) {
  const queue = usePlayerStore((s) => s.queue);
  const currentIndex = usePlayerStore((s) => s.currentIndex);
  const setQueue = usePlayerStore((s) => s.setQueue);

  return (
    <div className="flex flex-col h-full">
      {/* header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={onClose}>
          <ArrowLeft size={18} />
        </button>

        <span className="text-sm text-neutral-400">Queue</span>

        <div className="w-5" /> {/* spacer */}
      </div>

      {/* list */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {queue.map((song, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={song.id}
              onClick={() => setQueue(queue, index)}
              className={`
                flex items-center gap-3 p-2 rounded-lg cursor-pointer
                ${isActive ? "bg-neutral-800" : "hover:bg-neutral-800"}
              `}
            >
              <div className="relative w-10 h-10 rounded overflow-hidden">
                <Image
                  src={song.imageUrl}
                  alt={song.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">
                  {song.title}
                </div>

                <div className="text-xs text-neutral-400 truncate">
                  {song.artist}
                </div>
              </div>

              {isActive && (
                <span className="text-xs text-green-500">
                  Playing
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}