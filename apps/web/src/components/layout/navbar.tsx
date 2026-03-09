"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            viewBox="0 0 320 120"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-auto"
          >
            <defs>
              <linearGradient id="mcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4ecd" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>

            {/* Icon Circle */}
            <circle cx="50" cy="60" r="28" fill="url(#mcGradient)" opacity="0.15" />

            {/* Waveform Bars */}
            <rect x="38" y="48" width="4" height="24" rx="2" fill="url(#mcGradient)" />
            <rect x="46" y="42" width="4" height="36" rx="2" fill="url(#mcGradient)" />
            <rect x="54" y="50" width="4" height="20" rx="2" fill="url(#mcGradient)" />
            <rect x="62" y="45" width="4" height="30" rx="2" fill="url(#mcGradient)" />

            {/* Connection Nodes */}
            <circle cx="40" cy="48" r="2.5" fill="#22d3ee" />
            <circle cx="64" cy="45" r="2.5" fill="#ff4ecd" />

            {/* Connection Line */}
            <line x1="40" y1="48" x2="64" y2="45" stroke="url(#mcGradient)" strokeWidth="2" />

            {/* Brand Text */}
            <text
              x="95"
              y="70"
              fontFamily="Inter, sans-serif"
              fontSize="34"
              fontWeight="600"
              fill="url(#mcGradient)"
            >
              MusiConnect
            </text>
          </svg>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link href="#">Home</Link>
          <Link href="#">New Artists</Link>
          <Link href="#">Download</Link>
          <Link href="#">Pricing</Link>
        </nav>

        {/* Auth */}
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