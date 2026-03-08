"use client";

import { createArtist, getArtist, getArtistAlbums } from "@/services/artist.service";
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

      <button
        onClick={async () => {
          const artist = await getArtist(
            "22222222-2222-2222-2222-222222222222",
          );
          console.log("artist:", artist);
        }}
      >
        Test Get Artist
      </button>

      <button
        onClick={async () => {
          const albums = await getArtistAlbums(
            "11111111-1111-1111-1111-111111111111",
          );
          console.log("artist albums:", albums);
        }}
      >
        Test Artist Albums
      </button>

      <button
        onClick={async () => {
          const res = await createArtist({
            name: "Test Artist " + Math.floor(Math.random() * 1000),
          });

          console.log("artist created:", res);
        }}
      >
        Test Create Artist
      </button>
    </>
  );
}
