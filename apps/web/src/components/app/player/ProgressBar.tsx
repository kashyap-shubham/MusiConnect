"use client";

interface Props {
  progress?: number
}

export default function ProgressBar({
  progress = 35
}: Props) {

  return (

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
        style={{
          width: `${progress}%`
        }}
      />

    </div>

  );

}