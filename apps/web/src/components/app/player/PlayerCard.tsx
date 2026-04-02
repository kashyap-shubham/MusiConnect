"use client";

import Image from "next/image";

import { ListMusic } from "lucide-react";

import ProgressBar from "./ProgressBar";
import PlayerControls from "./PlayerControls";


export interface Song {

  id: string
  title: string
  artist: string

  imageUrl: string

  duration: number
  currentTime: number

}

interface Props {

  song?: Song

  isPlaying?: boolean

  onPlay?: () => void
  onPause?: () => void

  onNext?: () => void
  onPrev?: () => void

  onShuffle?: () => void
  onRepeat?: () => void

}

export default function PlayerCard({

  song,
  isPlaying,

  onPlay,
  onPause,

  onNext,
  onPrev,

  onShuffle,
  onRepeat

}: Props) {

  if (!song) {

    return (

      <div className="
        bg-neutral-900
        rounded-xl
        p-5
        text-neutral-400
      ">

        No song playing

      </div>

    );

  }


  return (

    <div
      className="
        bg-neutral-900
        rounded-xl
        p-5
        flex
        flex-col
        gap-6
      "
    >

      {/* header */}
      <div className="flex items-center justify-between">

        <span className="text-sm text-neutral-400">

          Player

        </span>


        <ListMusic size={18} />

      </div>


      {/* artwork */}
      <div
        className="
          relative
          w-full
          aspect-square
          rounded-lg
          overflow-hidden
          bg-neutral-800
        "
      >

        <Image
          src={song.imageUrl}
          alt={song.title}
          fill
          className="object-cover"
        />

      </div>


      {/* info */}
      <div className="text-center space-y-1">

        <div className="text-lg font-semibold">

          {song.title}

        </div>

        <div className="text-sm text-neutral-400">

          {song.artist}

        </div>

      </div>


      <ProgressBar

        duration={song.duration}

        currentTime={song.currentTime}

      />


      <PlayerControls

        isPlaying={isPlaying}

        onPlay={onPlay}
        onPause={onPause}

        onNext={onNext}
        onPrev={onPrev}

        onShuffle={onShuffle}
        onRepeat={onRepeat}

      />

    </div>

  );

}