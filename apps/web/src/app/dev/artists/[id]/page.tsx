import { getArtist } from "@/services/artist.service";

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artist = await getArtist(id);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{artist.name}</h1>

      <p>
        <strong>ID:</strong> {artist.id}
      </p>
    </main>
  );
}