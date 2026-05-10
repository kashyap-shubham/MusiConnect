"use client";

import { useState, useRef, useEffect } from "react";

import {
  MoreHorizontal,
  Pencil,
  Trash2,
  Star
} from "lucide-react";

interface Props {

  onRename: () => void

  onDelete: () => void

  onFavourite: () => void

}

export default function PlaylistMenu({

  onRename,
  onDelete,
  onFavourite

}: Props) {

  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({

    top: 0,

    left: 0

  });

  const buttonRef = useRef<HTMLButtonElement>(null);

  function openMenu(e: React.MouseEvent) {

    e.preventDefault();

    e.stopPropagation();

    const rect = buttonRef.current?.getBoundingClientRect();

    if (!rect) return;

    const menuWidth = 208;

    const padding = 12;

    const calculatedLeft =
      window.innerWidth < 640
        ? Math.max(
            padding,
            Math.min(
              rect.right - menuWidth,
              window.innerWidth - menuWidth - padding
            )
          )
        : rect.left - 160;

    setPosition({

      top: rect.bottom + 8,

      left: calculatedLeft

    });

    setOpen(true);

  }

  useEffect(() => {

    function closeMenu() {

      setOpen(false);

    }

    window.addEventListener(
      "click",
      closeMenu
    );

    return () =>

      window.removeEventListener(
        "click",
        closeMenu
      );

  }, []);

  return (

    <>

      {/* 3 dots */}
      <button
        ref={buttonRef}

        onClick={openMenu}

        className="
          p-1.5

          text-white/50
          hover:text-white

          hover:bg-white/5

          rounded-md

          transition

          shrink-0
        "
      >

        <MoreHorizontal size={16} />

      </button>

      {/* floating dropdown */}
      {open && (

        <div
          style={{

            position: "fixed",

            top: position.top,

            left: position.left

          }}

          className="
            w-52

            max-w-[calc(100vw-24px)]

            bg-neutral-900/95

            backdrop-blur-md

            border border-white/10

            rounded-lg

            shadow-2xl

            p-1.5

            z-999

            animate-in
            fade-in
            zoom-in-95
          "
        >

          <MenuItem
            icon={<Pencil size={14} />}
            label="Rename"
            onClick={onRename}
          />

          <MenuItem
            icon={<Star size={14} />}
            label="Add to favourites"
            onClick={onFavourite}
          />

          <div className="h-px bg-white/10 my-1" />

          <MenuItem
            icon={<Trash2 size={14} />}
            label="Delete"
            onClick={onDelete}
            danger
          />

        </div>

      )}

    </>

  );

}

function MenuItem({

  icon,
  label,
  onClick,
  danger

}: {

  icon: React.ReactNode

  label: string

  onClick: () => void

  danger?: boolean

}) {

  return (

    <button
      onClick={(e) => {

        e.stopPropagation();

        onClick();

      }}

      className={`
        flex items-center gap-3

        w-full

        px-3 py-2.5

        text-sm

        rounded-md

        transition

        whitespace-nowrap

        ${
          danger
            ? "text-red-400 hover:bg-red-500/10"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        }
      `}
    >

      {/* fixed icon width */}
      <span className="w-4 flex justify-center shrink-0">

        {icon}

      </span>

      {/* aligned label */}
      <span className="flex-1 text-left truncate">

        {label}

      </span>

    </button>

  );

}