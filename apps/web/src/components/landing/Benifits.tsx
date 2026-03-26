
export default function Benefit() {
    
    return(
        <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <h2 className="text-4xl mt-60 md:text-5xl font-semibold text-black text-center max-w-2xl">
                Experience Music Beyond the Screen
            </h2>
            <p className="mt-12 text-neutral-600 text-lg text-center max-w-xl">
                MusiConnect goes beyond digital engagement - we bring music creators and fans together in real life.  
            </p>

            <div className="flex justify-center items-center">
                {/* left card */}
                <div className="h-80 w-85 bg-black relative -left-[30%]">

                </div>

                {/* right card */}
                <div className="h-80 w-85 bg-black relative right-[-30%]">

                </div>

            </div>

        </section>
    )
}