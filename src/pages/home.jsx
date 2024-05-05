import HeroSection from "../components/page-components/home/hero-section";
import Features from "../components/page-components/home/features-section";
import Classes from "../components/page-components/home/our-classes";
import Banner from "../components/page-components/home/banner";
import Prices from "../components/page-components/home/prices-section";

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <Features/>
      <Classes/>
      <Banner/>
      <Prices/>
    </div>
  );
}

export default Home;
