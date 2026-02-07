import Image from "next/image";
import Navbar from "./components/Navbar";
import SpeakerSlider from "./components/SpeakerSlider";
import Hero from "./components/Hero";
import SponsorSection from "./components/Sponsors";
import About from "./components/About";
import FaqSection from "./components/FaqSection";
import StatsSection from "./components/Stats";
import Workshops from "./components/Workshops";

export default function Home() {
  return (
    <div className="">
      {/* <div className="w-64 h-64 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-teal-300 via-gray-100 to-blue-300"></div> */}
      <Hero />
      <About />
      <StatsSection />
      <Workshops />
      <SponsorSection />
      <SpeakerSlider />
      <FaqSection />
    </div>
  );
}
