import SpeakerSlider from "./components/SpeakerSlider";
import Hero from "./components/Hero";
import SponsorSection from "./components/Sponsors";
import About from "./components/About";
import FaqSection from "./components/FaqSection";
import StatsSection from "./components/Stats";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
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
