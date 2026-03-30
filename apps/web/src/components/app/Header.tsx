"use client"

import { Search } from "lucide-react"

export default function Header() {

  return (

    <div className="flex items-center justify-between mb-10">

      {/* search */}
      <div className="relative w-80">

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



      {/* profile */}
      <div className="flex items-center gap-3">

        <div className="
          h-9 w-9
          rounded-full
          bg-white/10
        "/>

      </div>

    </div>

  )

}