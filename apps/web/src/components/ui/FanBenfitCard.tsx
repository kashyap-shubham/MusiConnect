import { AudioLines } from "lucide-react";

export default function FanBenefitsCard() {

  return (

    <div className="rounded-4xl border border-white/10 bg-white/6 
    p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl absolute -right-50 h-90 w-80">

      {/* title */}
      <p className="text-xs tracking-[0.18em] text-white/60 text-center">
        FAN BENEFITS
      </p>


      {/* inner panel */}
      <div className="mt-6 rounded-2xl bg-black p-4 space-y-3">

        {/* pill 1 */}
        <div className="mt-5 flex items-center gap-2 w-fit rounded-full bg-linear-to-r from-orange-400 to-orange-300 
          px-4 py-2.5 text-sm font-medium text-white shadow-md">
          <AudioLines size={16} />

          Discovery
        </div>


        {/* pill 2 (shifted right) */}
        <div
          className="mt-5 ml-10 flex items-center gap-2 w-fit rounded-full bg-linear-to-r from-orange-400 to-orange-300 
          px-4 py-2.5 text-sm font-medium text-white shadow-md">
          Connection

          <AudioLines size={16} />
        </div>


        {/* pill 3 */}
        <div className="mt-5 flex items-center gap-2 w-fit rounded-full bg-linear-to-r from-orange-400 to-orange-300 
        px-4 py-2.5 text-sm font-medium text-white shadow-md">
          
          <AudioLines size={16} />

          Influence
        </div>


      </div>

    </div>

  );
}