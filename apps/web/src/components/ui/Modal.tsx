"use client"

import { X } from "lucide-react"

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

  if (!open) return null


  return (

    <div
      className="
        fixed
        inset-0

        bg-black/60

        flex
        items-center
        justify-center

        z-50
      "
    >

      <div
        className="
          relative

          w-full
          max-w-md

          bg-neutral-900

          rounded-xl

          p-6
        "
      >

        <button
          onClick={onClose}

          className="
            absolute
            top-3
            right-3

            text-neutral-400
            hover:text-white
          "
        >

          <X size={18} />

        </button>

        {children}

      </div>

    </div>

  )

}