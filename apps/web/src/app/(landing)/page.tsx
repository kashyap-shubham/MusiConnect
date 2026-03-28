import AppPreview from "@/components/landing/AppPreview";
import Heading from "@/components/landing/Heading";
import PhoneZoom from "@/components/landing/PhoneZoom";
import Navbar from "@/components/landing/Navbar";
import Benefit from "@/components/landing/Benifits";
import Screen from "@/components/landing/Screen1";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Heading /> */}
      <Screen />
      {/* <AppPreview />
      <PhoneZoom />
      <Benefit /> */}
    </>
  );
}
