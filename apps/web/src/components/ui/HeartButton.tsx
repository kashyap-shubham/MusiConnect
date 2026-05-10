"use client";

import { useState } from "react";

import { Heart } from "lucide-react";

import { toggleFavourite } from "@/lib/api/client-favourites.api";

interface Props {

  songId: string;

  initialState?: boolean;

}

export default function HeartButton({

  songId,

  initialState = false,

}: Props) {

  const [liked, setLiked] = useState(initialState);

  async function handleToggle(e: React.MouseEvent) {

    e.stopPropagation();

    try {

      const result = await toggleFavourite(
        "SONG",
        songId,
      );

      setLiked(result.isFavourite);

    } catch (err) {

      console.error("Favourite error", err);

    }

  }

  return (

    <button
      onClick={handleToggle}

      className="
        flex
        items-center
        justify-center

        h-8
        w-8

        sm:h-9
        sm:w-9

        rounded-full

        text-neutral-400

        hover:text-white
        hover:bg-white/10

        active:scale-95

        transition

        shrink-0
      "
    >

      <Heart
        size={16}
        fill={liked ? "white" : "none"}
      />

    </button>

  );

}