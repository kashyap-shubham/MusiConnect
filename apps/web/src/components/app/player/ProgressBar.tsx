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
    (currentTime / duration) * 100;


  return (

    <div className="space-y-1">

      <div
        className="
          h-1
          w-full

          bg-neutral-700
          rounded-full
          overflow-hidden
        "
      >

        <div
          className="
            h-full
            bg-white
          "

          style={{

            width: `${progress}%`

          }}
        />

      </div>


      <div
        className="
          flex
          justify-between

          text-[10px]
          text-neutral-400
        "
      >

        <span>

          {Math.floor(currentTime / 60)}:
          {(currentTime % 60).toString().padStart(2, "0")}

        </span>


        <span>

          {Math.floor(duration / 60)}:
          {(duration % 60).toString().padStart(2, "0")}

        </span>

      </div>

    </div>

  );

}