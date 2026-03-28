import Section from "@/components/app/Section"
import SongCard from "@/components/app/Songcard"
import PlaylistCard from "@/components/app/PlaylistCard"

export default function HomePage() {

  return (
    <div className="space-y-10">

      <Section title="Trending Songs">

        <div className="grid grid-cols-5 gap-4">

          <SongCard/>
          <SongCard/>
          <SongCard/>
          <SongCard/>
          <SongCard/>

        </div>

      </Section>


      <Section title="Popular Playlists">

        <div className="grid grid-cols-5 gap-4">

          <PlaylistCard/>
          <PlaylistCard/>
          <PlaylistCard/>
          <PlaylistCard/>

        </div>

      </Section>

    </div>
  )
}