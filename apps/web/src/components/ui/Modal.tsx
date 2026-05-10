"use client";

import { X } from "lucide-react";

interface Props {

  open: boolean

  onClose: () => void

  children: React.ReactNode

}

export default function Modal({

  open,
  onClose,
  children

}: Props) {

  if (!open) return null;

  return (

    <div
      className="
        fixed
        inset-0

        z-50

        bg-black/60

        flex
        items-center
        justify-center

        p-4

        sm:p-6
      "
    >

      <div
        className="
          relative

          w-full
          max-w-md

          max-h-[90vh]

          overflow-y-auto

          bg-neutral-900

          rounded-xl

          p-5

          sm:p-6
        "
      >

        <button
          onClick={onClose}

          className="
            absolute
            top-3
            right-3

            h-8
            w-8

            rounded-full

            flex
            items-center
            justify-center

            text-neutral-400

            hover:text-white
            hover:bg-white/10

            transition

            shrink-0
          "
        >

          <X size={18} />

        </button>

        {children}

      </div>

    </div>

  );

}