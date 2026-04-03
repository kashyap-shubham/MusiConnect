"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback
} from "react";

interface Props {
  duration: number;
  currentTime: number;
  onSeek?: (time: number) => void;
}

export default function ProgressBar({
  duration,
  currentTime,
  onSeek,
}: Props) {

  const barRef =
    useRef<HTMLDivElement>(null);

  const [dragging, setDragging] =
    useState(false);

  const [hovering, setHovering] =
    useState(false);

  const [localTime, setLocalTime] =
    useState(0);


  const displayTime =
    dragging ? localTime : currentTime;


  const progress =
    duration > 0
      ? (displayTime / duration) * 100
      : 0;


  const calculateTime =
    useCallback(

      (clientX: number) => {

        const rect =
          barRef.current?.getBoundingClientRect();

        if (!rect) return 0;

        const percent =
          (clientX - rect.left) / rect.width;

        const clamped =
          Math.min(Math.max(percent, 0), 1);

        return clamped * duration;

      },

      [duration]

    );


  const startDrag = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const time =
      calculateTime(e.clientX);

    setDragging(true);
    setLocalTime(time);

  };


  const onDrag =
    useCallback(

      (e: MouseEvent) => {

        if (!dragging) return;

        const time =
          calculateTime(e.clientX);

        setLocalTime(time);

      },

      [dragging, calculateTime]

    );


  const stopDrag =
    useCallback(() => {

      if (dragging) {

        onSeek?.(localTime);

      }

      setDragging(false);

    },

      [dragging, localTime, onSeek]

    );


  useEffect(() => {

    window.addEventListener(
      "mousemove",
      onDrag
    );

    window.addEventListener(
      "mouseup",
      stopDrag
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        onDrag
      );

      window.removeEventListener(
        "mouseup",
        stopDrag
      );

    };

  }, [onDrag, stopDrag]);


  // click to seek
  function handleClick(
    e: React.MouseEvent<HTMLDivElement>
  ) {

    const time =
      calculateTime(e.clientX);

    onSeek?.(time);

  }


  function formatTime(seconds: number) {

    const m =
      Math.floor(seconds / 60);

    const s =
      Math.floor(seconds % 60);

    return `${m}:${s
      .toString()
      .padStart(2, "0")}`;

  }


  return (

    <div className="space-y-1">

      <div
        ref={barRef}

        onMouseDown={startDrag}
        onClick={handleClick}

        onMouseEnter={() =>
          setHovering(true)
        }

        onMouseLeave={() =>
          setHovering(false)
        }

        className="
          relative
          h-1.5
          w-full

          bg-neutral-700
          rounded-full

          cursor-pointer
        "
      >

        {/* progress fill */}
        <div
          className="
            absolute
            left-0
            top-0

            h-full

            bg-white
            rounded-full
          "

          style={{
            width: `${progress}%`,
          }}
        />


        {/* knob */}
        <div
          className={`
            absolute
            top-1/2

            h-3
            w-3

            bg-white

            rounded-full

            -translate-y-1/2
            -translate-x-1/2

            shadow

            transition

            ${
              hovering || dragging
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }
          `}

          style={{
            left: `${progress}%`,
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
          {formatTime(displayTime)}
        </span>

        <span>
          {formatTime(duration)}
        </span>

      </div>

    </div>

  );

}