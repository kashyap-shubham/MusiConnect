"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Compass, LayoutGrid, Disc3, Mic2, Clock, Heart, Plus} from "lucide-react";
import cn from "@/lib/utils/cn";
import { useState } from "react";
import CreatePlaylistModal from "./CreatePlaylistModal";
import PlaylistMenu from "./PlaylistMenu";
import { PlaylistDTO } from "@repo/types";
import { createPlaylist, deletePlaylist, renamePlaylist } from "@/lib/api/client-playlist.api";


type SidebarProps = {
  playlists: PlaylistDTO[];
};

export default function Sidebar({ playlists: initialPlaylists }: SidebarProps) {

  const [playlists, setPlaylists] = useState(initialPlaylists);

  const [openModal, setOpenModal] = useState(false);

  const pathname = usePathname();

  async function handleCreatePlaylist(name: string) {

    const optimisticId = crypto.randomUUID();
    
    const optimisticPlaylist: PlaylistDTO = {
      id: optimisticId,
      name,
      createdAt: new Date().toISOString(),
      songsCount: 0
    }
  
    setPlaylists((prev) => [optimisticPlaylist, ...prev]);

    try {
      const realPlaylist = await createPlaylist(name);

      setPlaylists(prev => prev.map(p => p.id === optimisticId ? realPlaylist : p));

    } catch (error) {
      setPlaylists(prev => prev.filter(p => p.id !== optimisticId));
    }
  }

  async function handleRenamePlaylist(playlistId: string, newName: string) {
    
    const previous = [...playlists];

    setPlaylists(prev =>
      prev.map(p =>
        p.id === playlistId
          ? {
              ...p,
              name: newName
            }
          : p
      )
    )



    try {

      await renamePlaylist(playlistId, newName)

    } catch {

      setPlaylists(previous)

    }

  }

  async function handleDeletePlaylist(playlistId: string) {

    const previous = [...playlists];
    
    setPlaylists(prev =>
      prev.filter(p =>
        p.id !== playlistId
      )
    )

    try {
      await deletePlaylist(playlistId)

    } catch {
      setPlaylists(previous)
    }

  }

  const menuItems = [
    {
      label: "Explore",
      href: "/explore",
      icon: Compass,
    },

    {
      label: "Genres",
      href: "/genres",
      icon: LayoutGrid,
    },

    {
      label: "Albums",
      href: "/albums",
      icon: Disc3,
    },

    {
      label: "Artists",
      href: "/artists",
      icon: Mic2,
    },
  ];

  const libraryItems = [
    {
      label: "Recent",
      href: "/recent",
      icon: Clock,
    },

    {
      label: "Favourites",
      href: "/liked",
      icon: Heart,
    },
  ];

  return (
    <div className="h-screen flex flex-col px-6 py-8">
      
      {/* LOGO */}
      <h1 className="text-xl font-semibold mb-10 cursor-pointer">MusiConnect</h1>

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

        <button
          onClick={() => setOpenModal(true)}
          className="
              flex items-center gap-3
              text-sm
              text-white/70
              hover:text-white hover:cursor-pointer">

          <Plus size={18} />
          Create New
        </button>

        <div className="mt-4 space-y-2 overflow-y-auto text-sm text-white/70">
          {playlists.length === 0 ? (<p className="text-white/40 text-xs"> No Playlists yet</p>) : 
          (
            <div className="mt-4 space-y-2">
              {playlists.map((playlist) => (
                <div key={playlist.id}
                  className="
                      flex
                      items-center
                      justify-between
                      px-1
                      hover:bg-white/5
                      rounded-md
                      group">

                  <Link
                    href={`/playlist/${playlist.id}`}
                    className={cn("flex-1 truncate py-1", 
                        pathname === `/playlists/${playlist.id}` ? "text-white" : "text-white/70 hover:text-white"
                    )}>

                    {playlist.name}
                  </Link>

                  <PlaylistMenu
                    onRename={async () => {
                      const newName = prompt("Rename playlist");

                      if (!newName?.trim()) return;

                      await handleRenamePlaylist(playlist.id, newName);
                    }}
                      
                    onDelete={async () => {
                      await handleDeletePlaylist(playlist.id);
                    }}

                    onFavourite={() => {
                      console.log("favourite playlist", playlist.id);
                    }}
                  />
                </div>
              ))}

            </div>
          )}
        </div>
      </div>

      {/* modal */}
      <CreatePlaylistModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreate={handleCreatePlaylist}
      />
    </div>
  );
}
