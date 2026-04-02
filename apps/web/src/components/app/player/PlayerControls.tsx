"use client";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward
} from "lucide-react";

interface Props {
  isPlaying?: boolean
}

export default function PlayerControls({
  isPlaying = false
}: Props) {

  return (

    <div className="flex items-center justify-center gap-6">

      <button className="text-neutral-400 hover:text-white">

        <SkipBack size={18} />

      </button>


      <button
        className="
          h-14
          w-14
          rounded-full
          bg-indigo-500
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-105
          transition
        "
      >

        {isPlaying
          ? <Pause size={22} />
          : <Play size={22} />
        }

      </button>


      <button className="text-neutral-400 hover:text-white">

        <SkipForward size={18} />

      </button>

    </div>

  );

}