import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import TrendingTracks from "@/components/sections/trending-tracks";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrendingTracks />
    </main>
  );
}