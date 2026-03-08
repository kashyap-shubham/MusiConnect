"use client";

import { createAlbum, getAlbum, getAlbums, getAlbumSongs } from "@/services/album.service";
import {
  createArtist,
  getArtist,
  getArtistAlbums,
} from "@/services/artist.service";
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
      <br />
      <button
        onClick={async () => {
          const res = await deleteSong(songId);
          console.log("delete response:", res);
        }}
      >
        Delete Song
      </button>
      <br />
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
      <br />
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
      <br />
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
      <br />
      <button
        onClick={async () => {
          const albums = await getAlbums();
          console.log("albums:", albums);
        }}
      >
        Test Get Albums
      </button>
      <br />
      <button
        onClick={async () => {
          const album = await getAlbum("33333333-3333-3333-3333-333333333333");
          console.log("album:", album);
        }}
      >
        Test Get Album
      </button>
      <br />
      <button
        onClick={async () => {
          const songs = await getAlbumSongs(
            "33333333-3333-3333-3333-333333333333",
          );
          console.log("album songs:", songs);
        }}
      >
        Test Album Songs
      </button>
      <br />
      {/* <button
        onClick={async () => {
          const res = await createAlbum({
            title: "Test Album " + Math.floor(Math.random() * 1000),
            releaseDate: new Date().toISOString(),
            artistId: "22222222-2222-2222-2222-222222222222",
          });

          console.log("album created:", res);
        }}
      >
        Test Create Album
      </button> */}

      <button
        onClick={async () => {
          const payload = {
            title: "Test Album " + Math.floor(Math.random() * 1000),
            releaseDate: new Date().toISOString(),
            artistId: "22222222-2222-2222-2222-222222222222",
          };

          console.log("payload:", payload);

          const res = await createAlbum(payload);

          console.log("album created:", res);
        }}
      >
        Test Create Album
      </button>
    </>
  );
}
