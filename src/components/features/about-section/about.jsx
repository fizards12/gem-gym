import Section from "../../UI/section";
import { FaPlay } from "react-icons/fa";
import img from "../../../assets/about-us.jpg";
import { Dialog, Progress } from "@material-tailwind/react";
import { useState } from "react";
function AboutUS() {
  const [show, setShow] = useState(false);
  const toggleShow = (e) => {
    e.preventDefault();
    setShow((s) => !s);
  };
  return (
    <div className="flex max-md:flex-col">
      <div
        style={{ backgroundImage: `url(${img})`,height:640 }}
        className=" bg-center-top bg-cover w-full flex justify-center items-center"
      >
        <a
          href="#"
          className="h-16 w-16 rounded-full flex justify-center items-center bg-orange-900"
          onClick={toggleShow}
        >
          <FaPlay />
        </a>
      </div>
      <Dialog open={show} handler={() => setShow((s) => !s)}>
        <img src={img} className="w-full" />
      </Dialog>
      <Section container={false} className={"bg-black w-full !px-16"}>
        <Section.Header title={"WHAT WE HAVE DONE"} subTitle={"ABOUT US"} />
        <Section.Body className={"flex flex-col gap-6"}>
          <p className="text-gray-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex flex-col gap-10">
            <ProgressGroup title={"Body Building"} value={80} />
            <ProgressGroup title={"Training"} value={85} />
            <ProgressGroup title={"Fitness"} value={75} />
          </div>
        </Section.Body>
      </Section>
    </div>
  );
}

function ProgressGroup({ title, value }) {
  return (
    <div className="w-full">
      <div className="mb-4 flex text-sm items-center justify-between gap-4">
        <span>{title}</span>
        <span>{value}%</span>
      </div>
      <Progress
        value={value}
        className="bg-gray-900 rounded-none"
        barProps={{ className: "bg-gray-600 rounded-none" }}
        variant="filled"
        size="sm"
      />
    </div>
  );
}

export default AboutUS;
