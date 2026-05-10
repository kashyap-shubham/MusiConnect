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

    <div className="flex flex-col h-full min-w-0">

      {/* header */}
      <div className="flex items-center justify-between mb-3">

        <button
          onClick={onClose}

          className="
            shrink-0

            hover:opacity-80

            transition
          "
        >

          <ArrowLeft size={18} />

        </button>

        <span
          className="
            text-sm
            text-neutral-400
            truncate
          "
        >

          Queue

        </span>

        <div className="w-5 shrink-0" /> {/* spacer */}

      </div>

      {/* list */}
      <div
        className="
          flex-1
          overflow-y-auto

          overflow-x-hidden

          space-y-2

          pr-1

          min-w-0
        "
      >

        {queue.map((song, index) => {

          const isActive = index === currentIndex;

          return (

            <div
              key={song.id}

              onClick={() => setQueue(queue, index)}

              className={`
                flex
                items-center

                gap-3

                p-2

                rounded-lg

                cursor-pointer

                min-w-0

                ${isActive
                  ? "bg-neutral-800"
                  : "hover:bg-neutral-800"
                }
              `}
            >

              <div
                className="
                  relative

                  w-10
                  h-10

                  rounded

                  overflow-hidden

                  shrink-0
                "
              >

                <Image
                  src={song.imageUrl}
                  alt={song.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="flex-1 min-w-0">

                <div
                  className="
                    text-sm
                    font-medium
                    truncate
                  "
                >

                  {song.title}

                </div>

                <div
                  className="
                    text-xs
                    text-neutral-400
                    truncate
                  "
                >

                  {song.artist}

                </div>

              </div>

              {isActive && (

                <span
                  className="
                    hidden
                    sm:block

                    text-xs
                    text-green-500

                    shrink-0
                  "
                >

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