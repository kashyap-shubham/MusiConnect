"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function PhoneZoom() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"]
  });

  // increase scale more aggressively
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 3]);

  // text fade in only near end of scroll
  const opacity = useTransform(
    scrollYProgress,
    [0.4, 1],
    [0, 1]
  );

  // slight upward motion for smooth reveal
  const y = useTransform(
    scrollYProgress,
    [0.4, 1],
    [80, 0]
  );



  return (
    <section ref={ref} className="relative h-[160vh] w-full flex items-center justify-center overflow-hidden">

      <motion.div
        style={{ scale }} className="relative w-[150vw] flex justify-center">

        <Image src="/phone_mockup.png" alt="phone-mockup" width={3000} height={1400} priority 
          className="w-full h-auto select-none pointer-events-none"/>

          {/* screen background */}
          <div className="absolute top-[8%] left-[30.5%] w-[39%] h-[70%] bg-white rounded-[9%] -z-10 flex items-center justify-center text-center p-10">
            
            <motion.div style={{opacity, y }} className="max-w-md">
              
              <h2 className="text-3xl font-semibold text-black mb-4 leading-tight">
                Experience Music Beyond the Screen 
              </h2>

              <p className="text-black text-lg leading-relaxed">
                MusiConnect goes beyond digital engagement - we bring music creators and fans together in real life.
              </p>

            </motion.div>
          </div>

      </motion.div>

    </section>
  );
}