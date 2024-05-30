import { Carousel } from "@material-tailwind/react";
import { forwardRef } from "react";
import { motion } from "framer-motion";

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

const Slides = forwardRef(function Slides({ children, ...props }, ref) {
  return (
    <Carousel
      {...props}
      className={`md:h-1040 min-h-min`}
      loop
      transition={{ type: "spring", bounce: 0.1 }}
      navigation={() => <></>}
      ref={ref}
    >
      {children}
    </Carousel>
  );
});

Slides.Slide = forwardRef(function Slide(
  { children, className, bgImg, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`${className} bg-no-repeat w-full h-full relative
        bg-auto bg-center-top`}
      {...props}
    >
      {children}
    </div>
  );
});

Slides.Heading = function Heading({ className, children, ...props }) {
  return (
    <motion.h1
      variants={variants}
      className={`${className || ""} 
      md:text-7xl text-5xl 
      leading-tight font-black font-oswald uppercase`}
      {...props}
    >
      {children}
    </motion.h1>
  );
};

Slides.SubHeading = function SubHeading({ children, className, ...props }) {
  return (
    <motion.h3
      variants={variants}
      style={{ letterSpacing: "0.3em" }}
      className={`${
        className || ""
      } text-lg uppercase font-semibold font-muli flex`}
      {...props}
    >
      {children}
    </motion.h3>
  );
};

Slides.Content = function Content({ children, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      exit={"hidden"}
      viewport={{ margin: "-10%" }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      className={`${className || ""}
      flex flex-col 
      items-start gap-4 
      p-3 sm:ms-20 sm:w-1/2 
      md:ms-auto`}
    >
      {children}
    </motion.div>
  );
};

export default Slides;
