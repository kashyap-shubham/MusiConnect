"use client"

import { useState } from "react"

import Modal from "@/components/ui/Modal"

interface Props {

  open: boolean

  onClose: () => void

  onCreate: (name: string) => void

}

export default function CreatePlaylistModal({

  open,
  onClose,
  onCreate

}: Props) {

  const [name, setName] = useState("")


  function handleSubmit() {

    if (!name.trim()) return

    onCreate(name)

    setName("")

    onClose()

  }


  return (

    <Modal
      open={open}
      onClose={onClose}
    >

      <div className="space-y-5">

        <h2 className="text-lg font-semibold">

          Create Playlist

        </h2>


        <input

          value={name}

          onChange={(e) =>
            setName(e.target.value)
          }

          placeholder="Playlist name"

          className="
            w-full

            bg-neutral-800

            rounded-md

            px-3
            py-2

            outline-none

            text-sm
          "
        />


        <button

          onClick={handleSubmit}

          className="
            w-full

            bg-white
            text-black

            rounded-md

            py-2

            text-sm
            font-medium
          "
        >

          Create

        </button>

      </div>

    </Modal>

  )

}