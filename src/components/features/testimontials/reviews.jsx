import { IconButton } from "@material-tailwind/react";
import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Section from "../../UI/section";
import Slider from "react-slick";
import Review from "./review-card";
import review1 from "../../../assets/testimonial/testimonial-1.jpg";
import review2 from "../../../assets/testimonial/testimonial-2.jpg";

function Reviews() {
  return (
    <Section>
      <Section.Header title={"OUR CILENT SAY"} className={"text-center"} subTitle={"TESTIMONIAL"} />
      <Section.Body className={"px-7"}>
        <Slider
          nextArrow={<NextArrow />}
          slidesToShow={1}
          prevArrow={<PrevArrow />}
          autoplay
          autoplaySpeed={4000}
          speed={1500}
        >
          <Review img={review1} name={"Marshmello Gomez"} rate={3.8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Review>
          <Review img={review2} name={"Marshmello Gomez"} rate={3.8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Review>
        </Slider>
      </Section.Body>
    </Section>
  );
}

const NextArrow = ({ className, onClick }) => (
  <div
    className={className + " max-sm:!hidden before:!content-none"}
    onClick={onClick}
  >
    <IconButton
      className="rounded-full"
      variant="gradient"
      color="gray"
      size="md"
    >
      <FaAngleDoubleRight size={20} />
    </IconButton>
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className + " max-sm:!hidden before:!content-none !-left-11"}
    onClick={onClick}
  >
    <IconButton
      className="rounded-full"
      variant="gradient"
      color="gray"
      size="md"
    >
      <FaAngleDoubleLeft size={20} />
    </IconButton>
  </div>
);

export default Reviews;
