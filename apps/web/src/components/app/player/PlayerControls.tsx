"use client";

import {

  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  ChevronUp

} from "lucide-react";

interface Props {

  isPlaying?: boolean

  onPlay?: () => void
  onPause?: () => void

  onNext?: () => void
  onPrev?: () => void

  onShuffle?: () => void
  onRepeat?: () => void

  isShuffle?: boolean;
  repeatMode?: "off" | "one" | "all";

}

export default function PlayerControls({

  isPlaying,

  onPlay,
  onPause,

  onNext,
  onPrev,

  onShuffle,
  onRepeat,

  isShuffle,
  repeatMode,

}: Props) {

  return (

    <div
      className="
        bg-linear-to-b
        from-indigo-500
        to-indigo-600

        rounded-lg

        py-3
        px-3

        sm:px-4

        space-y-2
      "
    >

      <div className="flex items-center justify-between gap-2">

        <button
          onClick={onRepeat}
          className="
            shrink-0
            p-1
          "
        >

          <Repeat size={16} />

        </button>

        <button
          onClick={onPrev}
          className="
            shrink-0
            p-1
          "
        >

          <SkipBack size={18} />

        </button>

        <button
          onClick={isPlaying ? onPause : onPlay}

          className="
            h-9
            w-9

            sm:h-10
            sm:w-10

            shrink-0

            bg-white
            text-black

            rounded-full

            flex items-center justify-center

            shadow
          "
        >

          {isPlaying
            ? <Pause size={18} />
            : <Play size={18} />
          }

        </button>

        <button
          onClick={onNext}
          className="
            shrink-0
            p-1
          "
        >

          <SkipForward size={18} />

        </button>

        <button
          onClick={onShuffle}
          className="
            shrink-0
            p-1
          "
        >

          <Shuffle size={16} />

        </button>

      </div>

      <div className="flex items-center justify-center gap-1">

        <ChevronUp size={14} />

        <span
          className="
            text-[10px]
            tracking-wide
          "
        >

          LYRICS

        </span>

      </div>

    </div>

  );

}