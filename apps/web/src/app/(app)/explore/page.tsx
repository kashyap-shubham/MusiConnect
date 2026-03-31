import HeroSection from "@/components/app/explore/HeroSection";
import Header from "@/components/app/Header";

export default function ExplorePage() {
  return (
    <div className="p-10">
      <Header />
      <HeroSection
        title="In My Feelings"
        subtitle="Camila Cabello · 63 Million Plays"
        label="Trending New Hits"
        imageUrl="/artists/artist1.jpg"
      />

    </div>
  );
}
