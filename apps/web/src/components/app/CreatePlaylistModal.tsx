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

    if (!name.trim()) return;

    onCreate(name);
    setName("");
    onClose();

  };


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
          autoFocus
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit()
            }
          }}
          placeholder="Playlist name"
          aria-label="Playlist name"
          className="
            w-full
            bg-neutral-800
            rounded-md
            px-3
            py-2
            outline-none
            text-sm"
        />


        <button
          disabled={!name.trim()}
          onClick={handleSubmit}
          className="
            w-full
            bg-white
            text-black
            rounded-md
            py-2
            text-sm
            font-medium

            disabled:opacity-40
            disabled:cursor-not-allowed"
        >

          Create
        </button>

      </div>

    </Modal>

  );

};