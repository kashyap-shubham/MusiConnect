"use client";

import ArtistCard from "../ui/ArtistCard";

export default function Screen() {
  const cards = [
    // left most card
    {
      img: "/artists/artist3.jpg",
      positionClass: "absolute left-[-8%] top-[78%]",
      rotateClass: "-rotate-50",
      gradientClass: "bg-linear-to-br from-green-500/40 to-emerald-500/40",
      imageScale: "scale-95",
    },

    // left far card
    {
      img: "/artists/artist1.jpg",
      positionClass: "absolute left-[4%] top-[45%]",
      rotateClass: "-rotate-40",
      gradientClass: "bg-linear-to-br from-orange-500/50 to-pink-500/50",
      imageScale: "scale-96",
    },

    // left near card
    {
      img: "/artists/artist5.jpg",
      positionClass: "absolute left-[22%] top-[28%]",
      rotateClass: "-rotate-20",
    },

    // center card
    {
      img: "/artists/main.jpg",
      containerClass: "h-65 w-70",
    },

    // right near card
    {
      img: "/artists/artist6.jpg",
      positionClass: "absolute right-[22%] top-[28%]",
      rotateClass: "rotate-20",
      imageScale: "scale-150",
    },

    // right far card
    {
      img: "/artists/artist2.jpg",
      positionClass: "absolute right-[4%] top-[45%]",
      rotateClass: "rotate-40",
      gradientClass: "bg-linear-to-br from-green-500/40 to-emerald-500/40",
      imageScale: "scale-95",
    },

    // right most card
    {
      img: "/artists/artist4.jpg",
      positionClass: "absolute right-[-8%] top-[78%]",
      rotateClass: "rotate-50",
      gradientClass: "bg-linear-to-br from-green-500/40 to-emerald-500/40",
      imageScale: "scale-95",
    },
  ];

  return (
    <div className="mt-20 flex flex-col justify-center items-center">

      {/* floationg cards */}
      <div className="flex justify-between items-center">
        {cards.map((card, i) => (
          <ArtistCard key={i} {...card} />
        ))}
      </div>

      {/* center content */}
      <div className="relative mt-18 text-center">
        
        {/* heading */}
        <h1 className="mt-4 text-[64px] font-semibold tracking-tight leading-[1.05] md:text-[88px]">
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

    </div>
  );
}
