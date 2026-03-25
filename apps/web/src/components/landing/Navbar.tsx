"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <header className="sticky top-6 z-0 flex justify-center">

      <nav className="flex items-center justify-between gap-10 h-18 w-200 rounded-full border border-white/10 
          bg-[#363636] px-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

        {/* logo */}
        <Link href="/" className="flex items-center gap-3">

          {/* placeholder logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 
            bg-white/10 text-sm font-semibold tracking-wide">
            MC
          </div>

          <span className="text-[15px] font-semibold tracking-tight text-white/90">
            MusiConnect
          </span>
        </Link>

        {/* right side */}
        <div className="flex items-center gap-3">
          <Link href="/signin" className="rounded-full px-4 py-2 text-[14px] text-white/70 transition hover:text-white">
            Login
          </Link>

          <Link href="/signup" className="rounded-full bg-white px-5 py-2 text-[14px] font-semibold text-black transition hover:bg-white/90">
            Sign up
          </Link>

        </div>

      </nav>

    </header>
  );
}