import { getSong } from "@/services/song.service";
import UpdateSongButton from "./UpdateSongButton";

export default async function SongPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const song = await getSong(id);

  if (!song) {
    return <div style={{ padding: "2rem" }}>Song not found</div>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{song.title}</h1>

      <p>
        <strong>Duration:</strong> {song.duration}s
      </p>

      <p>
        <strong>Album:</strong> {song.album?.title}
      </p>

      <p>
        <strong>Audio Key:</strong> {song.audioKey}
      </p>

    <UpdateSongButton songId={song.id} />

      
    </main>
  );
}