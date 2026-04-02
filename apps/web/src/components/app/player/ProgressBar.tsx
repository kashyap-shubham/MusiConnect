"use client";

interface Props {

  duration: number
  currentTime: number

}

export default function ProgressBar({

  duration,
  currentTime

}: Props) {

  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;


  function formatTime(sec: number) {

    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);

    return `${m}:${s.toString().padStart(2, "0")}`;

  }


  return (

    <div className="space-y-2">

      <div className="relative h-[3px] bg-neutral-700 rounded">

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            bg-white
            rounded
          "
          style={{ width: `${progress}%` }}
        />


        <div
          className="
            absolute
            top-1/2
            -translate-y-1/2
            h-3
            w-3
            bg-white
            rounded-full
          "
          style={{ left: `${progress}%` }}
        />

      </div>


      <div className="flex justify-between text-xs text-neutral-400">

        <span>{formatTime(currentTime)}</span>

        <span>{formatTime(duration)}</span>

      </div>

    </div>

  );

}