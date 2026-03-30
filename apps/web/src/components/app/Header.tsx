"use client"

import {
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Home
} from "lucide-react"

import { useRouter } from "next/navigation"



export default function Header() {

  const router = useRouter()



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

        {/* profile avatar */}
        {/* <div
          className="
          h-9 w-9
          rounded-full
          bg-white/10
          cursor-pointer
        "
        /> */}

        {/* profile */}
        <div
          className="
            flex items-center gap-3
            px-3 py-1.5
            rounded-lg
            bg-white/5
            border border-white/10
            hover:bg-white/10
            cursor-pointer
            transition
            ">
        
        {/* avatar */}
          <div
            className="
                h-7 w-7
                rounded-full
                bg-white/20
            "
          />

          {/* username */}
          <p className="text-sm">Dummy User</p>
        </div>
      </div>
    </div>
  );

}