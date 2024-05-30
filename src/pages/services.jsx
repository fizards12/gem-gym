import Banner from "../components/features/banner";
import Footer from "../components/features/footer/footer";
import Header from "../components/features/header";
import ServicesSection from "../components/features/services/services";
import banner from "../assets/banner-bg.jpg";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { IoMdPlay } from "react-icons/io";
import Prices from "../components/features/prices-section/prices-section";
import Modal from "../components/features/gallery/image-modal";
function Services() {
  const [img, setImg] = useState(null);
  return (
    <div>
      <Header />
      <ServicesSection />
      <Banner
        title={"EXERCISE UNTIL THE BODY OBEYS."}
        subTitle={"WHERE HEALTH, BEAUTY AND FITNESS MEET."}
      >
        <IconButton
          size="lg"
          variant="filled"
          color="orange"
          onClick={() => setImg(banner)}
          className={`rounded-full p-7`}
        >
          <IoMdPlay size={20} />
        </IconButton>
      </Banner>
      <Prices />
      <Footer />
      <Modal onClick={() => setImg(null)} img={img} />
    </div>
  );
}

export default Services;
