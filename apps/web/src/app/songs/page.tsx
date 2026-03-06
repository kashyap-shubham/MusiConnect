import Link from "next/link";
import { getSongs } from "@/services/song.service";

export default async function SongsPage() {
  const songs = await getSongs();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Songs</h1>

      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <Link href={`/songs/${song.id}`}>
              {song.title} — {song.duration}s
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}