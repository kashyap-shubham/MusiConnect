"use client";

import {
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
} from "lucide-react";

import { useRouter } from "next/navigation";

import ProfileSection from "../ui/ProfileSection";

import { UserDTO } from "@repo/types";

type HeaderProps = {
  user: UserDTO;

  onOpenSidebarAction?: () => void;
};

export default function Header({
  user,
  onOpenSidebarAction,
}: HeaderProps) {
  const router = useRouter();

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        mb-6

        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:mb-10
      "
    >
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        {/* LEFT NAVIGATION */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU */}
          <button
            onClick={onOpenSidebarAction}
            className="
              flex
              lg:hidden

              p-2
              rounded-full
              bg-white/5
              hover:bg-white/50
              transition
              hover:cursor-pointer
            "
          >
            <Menu size={18} />
          </button>

          <button
            onClick={() => router.back()}
            className="p-2 rounded-full bg-white/5 hover:bg-white/50 transition hover:cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* RIGHT NAVIGATION */}
          <button
            onClick={() => router.forward()}
            className="p-2 rounded-full bg-white/5 hover:bg-white/50 transition hover:cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/50 transition hover:cursor-pointer">
            <Bell size={18} />
          </button>

          <ProfileSection user={user} />
        </div>
      </div>

      {/* SEARCH + HOME */}
      <div className="flex items-center gap-3 lg:flex-1 lg:justify-center">
        <button
          onClick={() => router.push("/explore")}
          className="
            p-2
            rounded-full
            bg-white/5
            hover:bg-white/50
            transition
            hover:cursor-pointer
            shrink-0
          "
        >
          <Home size={18} />
        </button>

        <div className="relative w-full sm:max-w-md lg:w-96">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            placeholder="Search songs, artists..."
            className="
              w-full
              bg-white/5
              border border-white/10
              rounded-lg
              pl-10
              pr-4
              py-2
              text-sm
              outline-none
              focus:border-white/20
            "
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/50 transition hover:cursor-pointer">
          <Bell size={18} />
        </button>

        <ProfileSection user={user} />
      </div>
    </div>
  );
}