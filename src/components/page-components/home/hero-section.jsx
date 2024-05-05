import { forwardRef } from "react";
import { motion } from "framer-motion";
import Slides from "../../UI/carousel";
import hero1 from "../../../assets/hero/hero-1.jpg";
import hero2 from "../../../assets/hero/hero-2.jpg";
import { Button } from "@material-tailwind/react";

const variants = {
  hidden: {
    opacity: 0,
    translateY: 80,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

const slideClass = `md:pt-80 pt-64 pb-36`;

const HeroSection = forwardRef(function HeroSection(props, ref) {
  return (
    <Slides
      navigation={() => <></>}
      {...props}
      className={`md:h-1040 sm:h-screen min-h-min`}
      loop
    >
      <Slides.Slide className={slideClass} bgImg={hero1}>
        <Slides.Content>
          <Slides.SubHeading>shape your body</Slides.SubHeading>
          <Slides.Heading>
            be <span className="text-orange-600">strong</span> traning hard
          </Slides.Heading>
          <motion.div variants={variants}>
            <Button className="text-lg rounded-none bg-orange-900">
              GET INFO
            </Button>
          </motion.div>
        </Slides.Content>
      </Slides.Slide>
      <Slides.Slide className={slideClass} bgImg={hero2}>
        <Slides.Content>
          <Slides.SubHeading>shape your body</Slides.SubHeading>
          <Slides.Heading>
            be <span className="text-orange-600">strong</span> traning hard
          </Slides.Heading>
          <motion.div variants={variants}>
            <Button className="text-lg rounded-none bg-orange-900">
              GET INFO
            </Button>
          </motion.div>
        </Slides.Content>
      </Slides.Slide>
    </Slides>
  );
});

export default HeroSection;
