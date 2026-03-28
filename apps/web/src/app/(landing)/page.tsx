import AppPreview from "@/components/landing/AppPreview";
import PhoneZoom from "@/components/landing/PhoneZoom";
import Navbar from "@/components/landing/Navbar";
import Benefit from "@/components/landing/Benifits";
import Screen1 from "@/components/landing/Screen1";

export default function Home() {
  return (
    <>
      <Navbar />
      <Screen1 />
      <AppPreview />
      <PhoneZoom />
      <Benefit />
    </>
  );
}
