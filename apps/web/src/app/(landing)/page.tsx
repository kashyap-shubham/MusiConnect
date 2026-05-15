import AppPreview from "@/components/landing/AppShowcaseSection";
import PhoneZoom from "@/components/landing/ImmersiveExperienceSection";
import Navbar from "@/components/landing/Navbar";
import Benefit from "@/components/landing/BenefitsSection";
import Screen1 from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <>
      <Screen1 />
      <AppPreview />
      <PhoneZoom />
      <Benefit />
    </>
  );
}
