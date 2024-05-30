import HeroSection from "../components/features/hero-section";
import Features from "../components/features/feature-section/features-section";
import Classes from "../components/features/our-classes/our-classes";
import Banner from "../components/features/banner";
import Prices from "../components/features/prices-section/prices-section";
import Gallery from "../components/features/gallery/gallery-section";
import Team from "../components/features/team-carousel/our-team";
import Footer from "../components/features/footer/footer";
import { Button } from "@material-tailwind/react";

function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <Features />
      <Classes />
      <Banner
        title={"REGISTRATION NOW TO GET MORE DEALS"}
        subTitle={"WHERE HEALTH, BEAUTY AND FITNESS MEET."}
      >
        <Button variant="text" color="orange" size="lg" ripple={false}
          className={`rounded-none
        bg-opacity-100
        border border-orange-600
        hover:bg-orange-600 hover:text-white`}
        >
          APPOINTMENT
        </Button>
      </Banner>
      <Prices />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
