"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Music Without <br /> Limits
          </h1>

          <p className="max-w-md text-muted">
            Discover millions of songs, connect with artists, and experience
            music like never before.
          </p>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-primary px-6 py-3 font-medium text-white hover:opacity-90">
              Sign Up Now
            </button>

            <button className="rounded-full border border-border px-6 py-3 text-muted hover:text-foreground">
              Explore Music
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <Image
            src="/hero-image.png"
            alt="music hero"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
