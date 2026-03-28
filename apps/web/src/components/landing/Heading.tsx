"use client";

import Image from "next/image";
import ArtistCard from "../ui/ArtistCard";


export default function Heading() {

  const cards = [

    // left farthest
    {
      img: "/artists/artist3.jpg",
      positionClass: "left-[-8%] top-[82%]",
      rotateClass: "-rotate-60",
      gradientClass:
        "bg-linear-to-br from-green-500/40 to-emerald-500/40",
      imageScale: "scale-95",
    },

    // left far
    {
      img: "/artists/artist1.jpg",
      positionClass: "left-[4%] top-[45%]",
      rotateClass: "-rotate-40",
      gradientClass:
        "bg-linear-to-br from-orange-500/50 to-pink-500/50",
      imageScale: "scale-96",
    },

    // left near
    {
      img: "/artists/artist5.jpg",
      positionClass: "left-[22%] top-[28%]",
      rotateClass: "-rotate-20",
    },

    // right near 
    {
      img: "/artists/artist6.jpg",
      positionClass: "right-[22%] top-[28%]",
      rotateClass: "rotate-20",
      imageScale: "scale-150",
    },

    // right far
    {
      img: "/artists/artist2.jpg",
      positionClass: "right-[4%] top-[45%]",
      rotateClass: "rotate-40",
      gradientClass:
        "bg-linear-to-br from-green-500/40 to-emerald-500/40",
      imageScale: "scale-95",
    },

    // right farthest
    {
      img: "/artists/artist4.jpg",
      positionClass: "right-[-8%] top-[82%]",
      rotateClass: "rotate-60",
      gradientClass:
        "bg-linear-to-br from-green-500/40 to-emerald-500/40",
      imageScale: "scale-95",
    },
  ];

  return (
    <section className="px-6 pt-10 relative">

      {/* floating cards */}
      <div className="absolute inset-0 pointer-events-none">

        { cards.map((card, i) => (
          <ArtistCard key={i} {...card} />
        ))}
        
      </div>


      {/* center content */}
      <div className="relative mt-16 flex flex-col items-center text-center">
        
        {/* center big card */}
        <div className="relative mb-16 rounded-[28px] bg-[#d9d2e9] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

          <div className="h-65 w-70 rounded-2xl overflow-hidden relative" >
            <Image 
              src="/artists/main.jpg" 
              alt="artist" 
              width={800} 
              height={800} 
              className="object-cover h-full w-full"
            />
          </div>

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
        <h1 className="mt-2 text-[64px] font-semibold tracking-tight leading-[1.05] md:text-[88px]">
          Music&apos;s <br />
          Social Media
        </h1>

        {/* paragraph */}
        <p className="font-bold mt-8 text-lg text-white/70 ">
          Creators deserve better. Fans deserve more. MusiConnect is built for
          both.
        </p>

        {/* CTA */}
        <button className="mt-10 rounded-full border border-white/80 px-7 py-3 text-sm text-white hover:bg-white/15 transition">
          Join to Listen
        </button>
        
      </div>

    </section>
  );
}

