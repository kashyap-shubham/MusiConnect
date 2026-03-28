"use client";

import Image from "next/image";
import CreatorBenefitsCard from "../ui/CreatorBenifitCard";
import FanBenefitsCard from "../ui/FanBenfitCard";


export default function AppPreview() {

    return(
        <div className="relative mt-70 flex flex-col items-center text-center">
            <div className="text-[64px] font-semibold text-white/85 tracking-tight leading-[1.05] md:text-[88px]">
                The Music App
            </div>

            <p className="font-bold mt-10 text-lg text-white/60 ">
                Music-centric social media
            </p>

            <div className="relative mt-8 flex items-center justify-center">
                
                {/* left card */}
                {/* <div className="absolute -left-50 top-50 h-90 w-80 rounded-4xl bg-white/10 shadow-2xl  */}
                {/* flex flex-col border border-white/10"> */}
                    
                    {/* <span className="m-6 text-xs font-bold tracking-widest text-white/60">MUSIC CREATOR BENEFITS</span> */}

                    {/* <div className="bg-black/50 h-full rounded-4xl m-2 p-4 space-y-3"> */}

                        {/* <div className="bg-blue-400/60"> */}
                            {/* Visibility */}
                        {/* </div> */}

                        {/* <div className="bg-blue-400/60"> */}
                            {/* Empowerment */}
                        {/* </div> */}

                        {/* <div className="bg-blue-400/60"> */}
                            {/* Collaboration */}
                        {/* </div> */}

                        {/* <div className="bg-blue-400/60"> */}
                            {/* Monetization */}
                        {/* </div> */}

                    {/* </div> */}

                <CreatorBenefitsCard />

                {/* </div> */}

                {/* phone mock up  */}
                <div className="relative mt-6">
                    <Image src="/phone_mockup.png" alt="phone-mockup" width={850} height={900} 
                    className="relative z-10 select-none"
                    loading="eager"/>
                </div>

                
                {/* right card */}
                {/* <div className="absolute -right-50 h-90 w-80 rounded-4xl bg-white/10 shadow-2xl 
                flex flex-col items-center justify-center">
                </div> */}

                <FanBenefitsCard />

            </div>

        </div>
        
    )
}