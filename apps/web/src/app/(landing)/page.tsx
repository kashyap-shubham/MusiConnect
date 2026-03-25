import AppPreview from "@/components/landing/AppPreview";
import Heading from "@/components/landing/Heading";
import PhoneZoom from "@/components/landing/PhoneZoom";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Heading />
      <AppPreview />
      <PhoneZoom />
    </>
  );
}
