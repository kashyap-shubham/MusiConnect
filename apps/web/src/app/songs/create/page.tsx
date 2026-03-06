"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createSong } from "@/services/song.service";
import { getArtists, Artist } from "@/services/artist.service";
import { getAlbums, Album } from "@/services/album.service";

export default function CreateSongPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const [audioKey, setAudioKey] = useState("");

  const [artistId, setArtistId] = useState("");
  const [albumId, setAlbumId] = useState("");

  const [artists, setArtists] = useState<Artist[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const artistsData = await getArtists();
        const albumsData = await getAlbums();

        setArtists(artistsData || []);
        setAlbums(albumsData || []);
      } catch (err) {
        console.error("Failed loading artists/albums", err);
      }
    }

    loadData();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!artistId) {
      alert("Please select an artist");
      return;
    }

    setLoading(true);

    try {
      await createSong({
        title,
        duration,
        audioKey,
        albumId: albumId || undefined,
        artistIds: [artistId],
      });

      router.push("/songs");
      router.refresh();
    } catch (error) {
      console.error("Create song failed:", error);
      alert("Failed to create song");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: "2rem", maxWidth: 500 }}>
      <h1>Create Song</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Duration (seconds)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label>Audio URL</label>
          <input
            value={audioKey}
            onChange={(e) => setAudioKey(e.target.value)}
            placeholder="https://example.com/song.mp3"
            required
          />
        </div>

        <div>
          <label>Artist</label>
          <select
            value={artistId}
            onChange={(e) => setArtistId(e.target.value)}
            required
          >
            <option value="">Select Artist</option>
            {artists.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Album</label>
          <select
            value={albumId}
            onChange={(e) => setAlbumId(e.target.value)}
          >
            <option value="">No Album</option>
            {albums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.title}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Song"}
        </button>
      </form>
    </main>
  );
}
