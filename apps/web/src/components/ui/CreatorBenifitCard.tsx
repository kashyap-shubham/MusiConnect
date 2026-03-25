import { AudioLines } from "lucide-react";

export default function CreatorBenefitsCard() {
  const benefits = [
    "Visibility",
    "Empowerment",
    "Collaboration",
    "Monetization",
  ];

  return (
    <div
      className="rounded-4xl border border-white/10 bg-white/6 
      p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl absolute -left-50 top-30 h-90 w-80">
      
      {/* title */}
      <p className="text-xs tracking-[0.18em] text-white/60 text-center">
        MUSIC CREATOR BENEFITS
      </p>

      {/* inner panel */}
      <div className="mt-5 rounded-2xl bg-black/50 p-4 space-y-3">
        {benefits.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-4 rounded-full bg-linear-to-r from-blue-400 to-blue-300 
            px-4 py-2.5 text-sm font-medium text-white shadow-md">

            {item}

            <AudioLines size={16} />

          </div>
        ))}

      </div>
      
    </div>
  );
}