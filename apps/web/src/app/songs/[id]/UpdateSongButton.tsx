"use client";

import { updateSong, deleteSong } from "@/services/song.service";

export default function UpdateSongButton({ songId }: { songId: string }) {
  return (
    <>
      <button
        onClick={async () => {
          await updateSong(songId, {
            title: "Updated Song From UI",
          });
        }}
      >
        Update Song
      </button>

      <button
        onClick={async () => {
          const res = await deleteSong(songId);
          console.log("delete response:", res);
        }}
      >
        Delete Song
      </button>
    </>
  );
}