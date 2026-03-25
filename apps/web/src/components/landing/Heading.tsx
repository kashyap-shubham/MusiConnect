"use client";

export default function Heading() {

  return (
    <section className="px-6 pt-10">

      {/* floating cards */}
      <div className="absolute inset-0 ">

        {/* left far */}
        <div className="absolute left-[4%] top-[47%] -rotate-45">
          <div className="h-48 w-50 rounded-2xl bg-linear-to-br from-orange-500/50 to-pink-500/50" />
        </div>
        
        {/* left near */}
        <div className="absolute left-[22%] top-[28%] -rotate-20">
          <div className="h-48 w-50 rounded-2xl bg-white/90" />
        </div>

        {/* right near */}
        <div className="absolute right-[22%] top-[28%] rotate-20">
          <div className="h-48 w-50 rounded-2xl bg-white/90" />
        </div>

        {/* right far */}
        <div className="absolute right-[4%] top-[47%] rotate-45">
          <div className="h-48 w-50 rounded-2xl bg-linear-to-br from-green-500/40 to-emerald-500/40" />
        </div>
      </div>


      {/* center content */}
      <div className="relative mt-16 flex flex-col items-center text-center">
        
        {/* center big card */}
        <div className="relative mb-16 rounded-[28px] bg-[#d9d2e9] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

          <div className="h-65 w-70 rounded-2xl bg-white/40" />

          <div className="absolute -right-10 top-[40%] rounded-xl bg-black/60 px-3 py-2 text-xs backdrop-blur">
            JPG
          </div>

          <div className="absolute -left-10 bottom-[30%] rounded-xl bg-black/60 px-3 py-2 text-xs backdrop-blur">
            comment
          </div>

          <div className="absolute -right-4.5 -bottom-4.5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            ♥
          </div>

        </div>

        {/* heading */}
        <h1 className=" text-[64px] font-semibold tracking-tight leading-[1.05] md:text-[88px]">
          Music&apos;s <br />
          Social Media
        </h1>

        subtitle
        <p className="font-bold mt-6 text-lg text-white/70 ">
          Creators deserve better. Fans deserve more. MusiConnect is built for
          both.
        </p>

        CTA
        <button className="mt-8 rounded-full border border-white/80 px-7 py-3 text-sm text-white hover:bg-white/15 transition">
          Join to Listen
        </button>
        
      </div>

    </section>
  );
}

