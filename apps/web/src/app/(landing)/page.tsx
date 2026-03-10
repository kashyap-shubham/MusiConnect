import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CTA from "@/components/sections/cta";
import ExploreGenres from "@/components/sections/explore-genres";
import FeaturedArtist from "@/components/sections/featured-artist";
import Hero from "@/components/sections/hero";
import TrendingTracks from "@/components/sections/trending-tracks";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrendingTracks />
      <ExploreGenres />
      <FeaturedArtist />
      <CTA />
      <Footer />
    </main>
  );
}