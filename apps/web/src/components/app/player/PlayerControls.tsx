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

}

export default function PlayerControls({

  isPlaying,

  onPlay,
  onPause,

  onNext,
  onPrev,

  onShuffle,
  onRepeat

}: Props) {

  return (

    <div
      className="
        bg-gradient-to-b
        from-indigo-500
        to-indigo-600
        rounded-xl
        pt-6
        pb-4
        px-6
        space-y-4
      "
    >

      <div className="flex items-center justify-between">

        <button onClick={onRepeat}>

          <Repeat size={18} />

        </button>


        <button onClick={onPrev}>

          <SkipBack size={20} />

        </button>


        <button
          onClick={isPlaying ? onPause : onPlay}
          className="
            h-14
            w-14
            bg-white
            text-black
            rounded-full
            flex
            items-center
            justify-center
            shadow-md
          "
        >

          {isPlaying
            ? <Pause size={22} />
            : <Play size={22} />
          }

        </button>


        <button onClick={onNext}>

          <SkipForward size={20} />

        </button>


        <button onClick={onShuffle}>

          <Shuffle size={18} />

        </button>

      </div>


      <div className="flex items-center justify-center gap-2">

        <ChevronUp size={16} />

        <span className="text-xs tracking-wide">

          LYRICS

        </span>

      </div>

    </div>

  );

}