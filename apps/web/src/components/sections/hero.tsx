import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div className="max-w-xl">

          <h1 className="text-5xl font-semibold leading-tight tracking-tight lg:text-6xl">
            Discover music from{" "}
            <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              independent artists
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-600">
            Stream and explore tracks from rising creators around the world.
            MusiConnect helps artists share their sound and listeners discover
            something new.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">

            <Link
              href="#"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Start Listening
            </Link>

            <Link
              href="#"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100"
            >
              Explore Artists
            </Link>

          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">

          <Image
            src="/hero-image.png"
            alt="Music discovery"
            width={600}
            height={500}
            className="w-full rounded-xl shadow-lg"
            priority
          />

        </div>

      </div>
    </section>
  );
}