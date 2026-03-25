import Image from "next/image";


export default function AppPreview() {

    return(
        <div className="mt-50 flex flex-col items-center text-center">
            <div className="text-[64px] font-semibold text-white/85 tracking-tight leading-[1.05] md:text-[88px]">
                The Music App
            </div>

            <p className="font-bold mt-10 text-lg text-white/60 ">
                Music-centric social media
            </p>

             {/* phone mock up  */}
             <div className="relative mt-20">
                <Image src="/phone_mockup.png" alt="phone-mockup" width={800} height={900} className="relative z-10 select-none"/>
             </div>
        </div>
    )
}