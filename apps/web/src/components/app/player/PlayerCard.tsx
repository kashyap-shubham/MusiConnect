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

      {/* header */}
      <div className="flex items-center justify-between mb-3">

        <span className="text-sm text-neutral-400">

          Player

        </span>

        <ListMusic size={18} />

      </div>


      {/* artwork grows */}
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

          {song ? (

            <Image
              src={song.imageUrl}
              alt={song.title}
              fill
              className="object-cover"
            />

          ) : (

            <span className="text-xs text-neutral-500">

              No song selected

            </span>

          )}

        </div>


        {/* song info */}
        <div className="text-center mt-3">

          <div className="text-base font-semibold truncate">

            {song?.title ?? "Nothing playing"}

          </div>

          <div className="text-sm text-neutral-400 truncate">

            {song?.artist ?? "Select a song"}

          </div>

        </div>

      </div>


      {/* bottom controls area */}
      <div className="mt-4 space-y-3">

        <ProgressBar

          duration={song?.duration ?? 0}

          currentTime={song?.currentTime ?? 0}

          onSeek={(time) => {
            console.log("seek to", time)
          }}
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

    </div>

  );

}