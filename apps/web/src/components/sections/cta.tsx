import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-semibold tracking-tight">
          Start discovering new music today
        </h2>

        <p className="mt-4 text-muted">
          Join MusiConnect and explore tracks from independent artists around the world.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            href="#"
            className="rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:scale-105"
          >
            Start Listening
          </Link>

          <Link
            href="#"
            className="rounded-full border border-border px-6 py-3 font-medium text-muted transition hover:text-foreground"
          >
            Explore Music
          </Link>

        </div>

      </div>
    </section>
  );
}