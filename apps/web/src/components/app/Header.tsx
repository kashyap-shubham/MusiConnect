"use client";
import { Search, Bell, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import ProfileSection from "../ui/ProfileSection";
import { UserDTO } from "@repo/types";


type HeaderProps = {
  user: UserDTO
}

export default function Header({ user }: HeaderProps) {


  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-10">

      {/* LEFT NAVIGATION */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT NAVIGATION */}
        <button
          onClick={() => router.forward()}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* SEARCH + HOME */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.push("/explore")}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          <Home size={18} />
        </button>

        <div className="relative w-96">
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
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
          <Bell size={18} />
        </button>

        {/* profile section  */}
        <ProfileSection user={user} />
      </div>
    </div>
  );
}
