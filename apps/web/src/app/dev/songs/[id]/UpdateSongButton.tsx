"use client";

import { createAlbum, getAlbum, getAlbums, getAlbumSongs } from "@/services/album.service";
import {
  createArtist,
  getArtist,
  getArtistAlbums,
} from "@/services/artist.service";
import { addSongToPlaylist, createPlaylist, getPlaylists, removeSongFromPlaylist } from "@/services/playlist.service";
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

      <button
        onClick={async () => {
          const payload = {
            title: "Test Album " + Math.floor(Math.random() * 1000),
            releaseDate: new Date().toISOString(),
            artistId: "22222222-2222-2222-2222-222222222222",
          };

          // console.log("payload:", payload);

          const res = await createAlbum(payload);

          console.log("album created:", res);
        }}
      >
        Test Create Album
      </button>

      <br />

      <button
        onClick={async () => {
          const playlists = await getPlaylists(
            "368f8bc4-34f1-4985-8c78-a2f84e6e7441",
          );
          console.log("playlists:", playlists);
        }}
      >
        Test Get Playlists
      </button>

      <br />

      <button
        onClick={async () => {
          const playlist = await createPlaylist({
            name: "My Test Playlist " + Math.floor(Math.random() * 1000),
            userId: "368f8bc4-34f1-4985-8c78-a2f84e6e7441",
          });

          console.log("playlist created:", playlist);
        }}
      >
        Test Create Playlist
      </button>

      <br />

      <button
        onClick={async () => {
          const res = await addSongToPlaylist(
            "95b36562-82e1-4053-b6d7-9b9bd1934564",
            "77777777-7777-7777-7777-777777777777",
          );

          console.log("song added:", res);
        }}
      >
        Test Add Song To Playlist
      </button>

      <br />

      <button
        onClick={async () => {
          const res = await removeSongFromPlaylist(
            "95b36562-82e1-4053-b6d7-9b9bd1934564",
            "77777777-7777-7777-7777-777777777777",
          );

          console.log("song removed:", res);
        }}
      >
        Test Remove Song From Playlist
      </button>

      <br />
    </>
  );
}
