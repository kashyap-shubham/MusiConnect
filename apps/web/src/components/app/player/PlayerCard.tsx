"use client";

import Image from "next/image";
import { ListMusic } from "lucide-react";
import { usePlayerStore } from "@/store/player.store";
import { useState } from "react";

import ProgressBar from "./ProgressBar";
import PlayerControls from "./PlayerControls";
import QueuePanel from "./QueuePanel";

export default function PlayerCard() {
  const currentSong = usePlayerStore((s) => s.currentSong);
  const isPlaying = usePlayerStore((s) => s.isPlaying);
  const togglePlay = usePlayerStore((s) => s.togglePlay);

  const currentTime = usePlayerStore((s) => s.currentTime);
  const duration = usePlayerStore((s) => s.duration);
  const seek = usePlayerStore((s) => s.seek);

  const playNext = usePlayerStore((s) => s.playNext);
  const playPrev = usePlayerStore((s) => s.playPrev);

  const [showQueue, setShowQueue] = useState(false);

  return (
    <div
      className="
        bg-neutral-900
        rounded-xl
        p-4
        h-full
        flex
        flex-col
      "
    >
      {showQueue ? (
        <QueuePanel onClose={() => setShowQueue(false)} />
      ) : (
        
        <>
          {/* header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-neutral-400">
              Player
            </span>

            <button onClick={() => setShowQueue(true)}>
              <ListMusic size={18} />
            </button>
          </div>

          {/* artwork */}
          <div className="flex-1 flex flex-col">
            <div
              className="
                relative
                w-full
                flex-1
                rounded-lg
                overflow-hidden
                bg-neutral-800
                flex
                items-center
                justify-center
              "
            >
              {currentSong ? (
                <Image
                  src={currentSong.imageUrl}
                  alt={currentSong.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-xs text-neutral-500">
                  Select a song to play
                </span>
              )}
            </div>

            {/* song info */}
            <div className="text-center mt-3">
              <div className="text-base font-semibold truncate">
                {currentSong?.title ?? "Nothing playing"}
              </div>

              <div className="text-sm text-neutral-400 truncate">
                {currentSong?.artist ?? "—"}
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-4 space-y-3">
            <ProgressBar
              duration={duration}
              currentTime={currentTime}
              onSeek={seek}
            />

            <PlayerControls
              isPlaying={isPlaying}
              onPlay={togglePlay}
              onPause={togglePlay}
              onNext={playNext}
              onPrev={playPrev}
              onShuffle={() => {}}
              onRepeat={() => {}}
            />
          </div>
        </>
      )}
    </div>
  );
}