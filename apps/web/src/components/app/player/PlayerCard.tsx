"use client";

import Image from "next/image";

import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";

export interface Song {

  title: string
  artist: string
  imageUrl: string

}

interface Props {

  song?: Song

}

export default function PlayerCard({

  song = {

    title: "Butterfly Effect",

    artist: "Travis Scott",

    imageUrl: "/mock/player.jpg"

  }

}: Props) {

  return (

    <div
      className="
        bg-neutral-900
        rounded-xl
        p-6
        flex
        flex-col
        gap-6
      "
    >

      {/* label */}
      <div className="text-sm text-neutral-400">

        Player

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
      <div className="text-center">

        <div className="font-semibold">

          {song.title}

        </div>

        <div className="text-sm text-neutral-400">

          {song.artist}

        </div>

      </div>


      {/* progress */}
      <ProgressBar />


      {/* controls */}
      <PlayerControls />


      {/* optional extra controls */}
      <div className="flex justify-center">

        <button
          className="
            text-xs
            text-neutral-400
            hover:text-white
          "
        >
          LYRICS
        </button>

      </div>

    </div>

  );

}