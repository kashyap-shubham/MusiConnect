"use client";

import Image from "next/image";
import CreatorBenefitsCard from "../ui/CreatorBenifitCard";
import FanBenefitsCard from "../ui/FanBenfitCard";
import { motion } from "motion/react";

export default function AppPreview() {

    return(
        <div className="relative mt-70 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.2, opacity: 0}}
              whileInView={{ scale: 1.1, opacity: 1, y: -80 }}
              transition={{ duration: 1 }}  
              className="text-[64px] font-semibold text-white/85 tracking-tight leading-[1.05] md:text-[88px]">
                The Music App
            </motion.div>

            <p className="font-bold mt-10 text-lg text-white/60 ">
                Music-centric social media
            </p>

            <div className="relative mt-8 flex items-center justify-center">

                <CreatorBenefitsCard />

                {/* phone mock up  */}
                <div className="relative mt-6">
                    <Image src="/phone_mockup.png" alt="phone-mockup" width={850} height={900} 
                    className="relative z-10 select-none"
                    loading="eager"/>
                </div>

                <FanBenefitsCard />

            </div>

        </div>
        
    )
}