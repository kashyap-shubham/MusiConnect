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

        rounded-lg

        py-3
        px-4

        space-y-2
      "
    >

      <div className="flex items-center justify-between">

        <button onClick={onRepeat}>

          <Repeat size={16} />

        </button>


        <button onClick={onPrev}>

          <SkipBack size={18} />

        </button>


        <button
          onClick={isPlaying ? onPause : onPlay}

          className="
            h-10
            w-10

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


        <button onClick={onNext}>

          <SkipForward size={18} />

        </button>


        <button onClick={onShuffle}>

          <Shuffle size={16} />

        </button>

      </div>


      <div className="flex items-center justify-center gap-1">

        <ChevronUp size={14} />

        <span className="text-[10px] tracking-wide">

          LYRICS

        </span>

      </div>

    </div>

  );

}