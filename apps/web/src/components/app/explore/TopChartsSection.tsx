"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import SongRow from "./SongRow";

const songs = [

  {
    id: "1",
    title: "Blinding Lights",
    artist: "The Weeknd",
    imageUrl: "/artists/artist1.jpg",
    duration: "3:22"
  },

  {
    id: "2",
    title: "As It Was",
    artist: "Harry Styles",
    imageUrl: "/artists/artist2.jpg",
    duration: "2:47"
  },

  {
    id: "3",
    title: "Starboy",
    artist: "The Weeknd",
    imageUrl: "/artists/artist3.jpg",
    duration: "3:50"
  },

  {
    id: "4",
    title: "Levitating",
    artist: "Dua Lipa",
    imageUrl: "/artists/artist4.jpg",
    duration: "3:12"
  },

  {
    id: "5",
    title: "Stay",
    artist: "Justin Bieber",
    imageUrl: "/artists/artist5.jpg",
    duration: "2:30"
  },

];

export default function TopChartsSection() {

  return (

    <section className="space-y-4">

      <SectionHeader title="Top Charts" />

      <div
        className="
          bg-neutral-900
          rounded-xl
          p-3
          space-y-1
          self-start
        "
      >

        {songs.map((song, i) => (

          <SongRow
            key={song.id}
            index={i + 1}
            song={song}
          />

        ))}

      </div>

    </section>

  );
}