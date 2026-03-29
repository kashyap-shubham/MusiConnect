"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, LayoutGrid, Disc3, Mic2, Clock, Heart, Plus } from "lucide-react"
import cn from "@/lib/cn"


type Playlist = {
  id: string;
  name: string;
}

type SidebarProps = {
  playlists: Playlist[]
}


export default function Sidebar({ playlists }: SidebarProps) {

    const pathname = usePathname()

    const menuItems = [

      {
        label: "Explore",
        href: "/explore",
        icon: Compass
      },

      {
        label: "Genres",
        href: "/genres",
        icon: LayoutGrid
      },

      {
        label: "Albums",
        href: "/albums",
        icon: Disc3
      },

      {
        label: "Artists",
        href: "/artists",
        icon: Mic2
      },

    ]


    const libraryItems = [

      {
        label: "Recent",
        href: "/recent",
        icon: Clock
      },

      {
        label: "Albums",
        href: "/library/albums",
        icon: Disc3
      },

      {
        label: "Favourites",
        href: "/liked",
        icon: Heart
      },

    ]

    // function linkClass(href: string) {

    //   return `
    //     flex items-center gap-3 text-sm transition
    //     ${pathname === href
    //       ? "text-white"
    //       : "text-white/70 hover:text-white"}
    //   `

    // }


    return (
      <div className="h-screen flex flex-col px-6 py-8">
        
        {/* LOGO */}
        <h1 className="text-xl font-semibold mb-10">MusiConnect</h1>

        {/* MENU */}
        <div className="mb-8">
          <p className="text-xs text-white/40 mb-4">MENU</p>

          <div className="flex flex-col gap-3">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 text-sm transition",
                    pathname === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  )}
                >

                  <Icon size={18} />

                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>


        {/* LIBRARY */}
        <div className="mb-8">
          <p className="text-xs text-white/40 mb-4">LIBRARY</p>

          <div className="flex flex-col gap-3">
            {libraryItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 text-sm transition",
                    pathname === item.href
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                  )}
                >

                  <Icon size={18} />

                  {item.label}
                </Link>
              );
            })}

          </div>

        </div>


        {/* PLAYLISTS */}
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-white/40 mb-4">PLAYLISTS</p>

          <Link
            href="/playlists/create"
            className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
          >
            <Plus size={18} />
            Create New
          </Link>

          <div className="mt-4 space-y-2 overflow-y-auto text-sm text-white/70">

            { playlists.length === 0 ? (

              <p className="text-white/40 text-xs"> No Playlists yet</p>
            ) : (
              playlists.map((playlist) => (
                
                <Link 
                  key={playlist.id}
                  href={`/playlists/${playlist.id}`}
                  className="block text-white/70 hover:text-white"
                  >
                    {playlist.name}

                  </Link>
              ))
            )}
            
          </div>
        </div>
      </div>
    );
      

}