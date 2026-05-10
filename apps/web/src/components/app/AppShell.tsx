"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";

import { PlaylistDTO, UserDTO } from "@repo/types";

type Props = {
  children: React.ReactNode;
  user: UserDTO;
  playlists: PlaylistDTO[];
};

export default function AppShell({
  children,
  user,
  playlists,
}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen flex overflow-hidden text-white">
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed inset-0
            bg-black/60
            backdrop-blur-sm
            z-40

            lg:hidden
          "
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen
          w-72

          border-r border-white/10
          bg-background

          transform transition-transform duration-300

          lg:hidden

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <Sidebar playlists={playlists} />
      </aside>

      {/* DESKTOP SIDEBAR */}
      <aside
        className="
          hidden
          lg:block

          lg:w-64
          xl:w-72

          shrink-0

          border-r border-white/10
        "
      >
        <Sidebar playlists={playlists} />
      </aside>

      {/* RIGHT COLUMN */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Header */}
        <div className="px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6 xl:px-10">
          <Header
            user={user}
            onOpenSidebarAction={() => setSidebarOpen(true)}
          />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-4 pb-6 pt-4 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10 xl:px-10">
          <div className="mx-auto w-full max-w-450">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}