import Link from "next/link"
import { Home, Music2, ListMusic, User } from "lucide-react"

export default function Sidebar() {

  return (
    <aside className="w-64 bg-zinc-950 border-r border-white/10 p-5">

      <h1 className="text-lg font-semibold mb-8">
        MusiConnect
      </h1>

      <nav className="space-y-2">

        <Link
          href="/home"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
        >
          <Home size={18}/>
          Home
        </Link>

        <Link
          href="/songs"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
        >
          <Music2 size={18}/>
          Songs
        </Link>

        <Link
          href="/playlists"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
        >
          <ListMusic size={18}/>
          Playlists
        </Link>

        <Link
          href="/artists"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5"
        >
          <User size={18}/>
          Artists
        </Link>

      </nav>

    </aside>
  )
}