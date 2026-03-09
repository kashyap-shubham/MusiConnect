"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          MusiConnect
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="#">Home</Link>
          <Link href="#">New Artists</Link>
          <Link href="#">Download</Link>
          <Link href="#">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm text-muted hover:text-foreground">
            Log In
          </button>

          <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
