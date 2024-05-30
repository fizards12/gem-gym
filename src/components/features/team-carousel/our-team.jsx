import { Button, IconButton } from "@material-tailwind/react";
import Section from "../../UI/section";
import Coach from "./card";
import coach2 from "../../../assets/team/team-2.jpg";
import coach3 from "../../../assets/team/team-3.jpg";
import coach4 from "../../../assets/team/team-4.jpg";
import Slider from "react-slick";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useContext } from "react";
import { screenCheckContext } from "../../../context/screens-context";

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

function Team() {
  const screenContext = useContext(screenCheckContext);
  const isBelowLg = screenContext.isBelowLG;
  const isBelowSM = screenContext.isBelowSM;

  let slidesToShow = 3;

  if (!isBelowLg && !isBelowSM) {
    slidesToShow = 3;
  } else if (isBelowLg && !isBelowSM) {
    slidesToShow = 2;
  } else if (isBelowSM) {
    slidesToShow = 1;
  }
  return (
    <Section>
      <Section.Header title={"TRAIN WITH EXPERTS"} subTitle={"OUR TEAM"}>
        <Button
          variant="text"
          color="orange"
          size="lg"
          className={`rounded-none
        bg-opacity-100
        border border-orange-600
        hover:bg-orange-600 hover:text-white`}
        >
          APPOINTMENT
        </Button>
      </Section.Header>
      <Section.Body>
        <div className="max-lg:w-5/6 w-11/12 m-auto">
          <Slider
            infinite
            speed={1500}
            slidesToShow={slidesToShow}
            autoplay
            autoplaySpeed={2500}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            <Coach img={coach2} name={"Athert Rachel"} title={"GYM TRAINER"} />
            <Coach img={coach3} name={"Athert Rachel"} title={"GYM TRAINER"} />
            <Coach img={coach4} name={"Athert Rachel"} title={"GYM TRAINER"} />
            <Coach img={coach2} name={"Athert Rachel"} title={"GYM TRAINER"} />
            <Coach img={coach3} name={"Athert Rachel"} title={"GYM TRAINER"} />
            <Coach img={coach4} name={"Athert Rachel"} title={"GYM TRAINER"} />
          </Slider>
        </div>
      </Section.Body>
    </Section>
  );
}

export default Team;
