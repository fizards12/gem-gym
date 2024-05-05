import Section from "../../UI/section";
import ClassCard from "./class-card";
import img2 from "../../../assets/classes/class-2.jpg";
import img3 from "../../../assets/classes/class-3.jpg";
import img4 from "../../../assets/classes/class-4.jpg";
import img5 from "../../../assets/classes/class-5.jpg";
import { Button } from "@material-tailwind/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Classes() {
  return (
    <Section>
      <Section.Header
        className={"text-center"}
        title={"WHAT WE CAN OFFER"}
        subTitle={"OUR CLASSES"}
      />
      <Section.Body className={"grid p-4 grid-cols-12 gap-4"}>
        <ClassCard className={"col-span-12 md:col-span-6 lg:col-span-4"}>
          <ClassCard.Image src={img2} alt={"WEIGHTLIFTING"} />
          <ClassCard.Heading title={"WEIGHTLIFTING"} subTitle={"STRENGTH"}>
            <div>
              <ClassCard.Link to={""}>
                <FaArrowUpRightFromSquare />
              </ClassCard.Link>
            </div>
          </ClassCard.Heading>
        </ClassCard>
        <ClassCard className={"col-span-12 md:col-span-6 lg:col-span-4"}>
          <ClassCard.Image src={img2} alt={"INDOOR CYCLING"} />
          <ClassCard.Heading title={"INDOOR CYCLING"} subTitle={"CARDIO"}>
            <div>
              <ClassCard.Link to={""}>
                <FaArrowUpRightFromSquare />
              </ClassCard.Link>
            </div>
          </ClassCard.Heading>
        </ClassCard>
        <ClassCard className={"col-span-12 md:col-span-6 lg:col-span-4"}>
          <ClassCard.Image src={img3} alt={"KETTLEBELL POWER"} />
          <ClassCard.Heading title={"KETTLEBELL POWER"} subTitle={"STRENGTH"}>
            <div>
              <ClassCard.Link to={""}>
                <FaArrowUpRightFromSquare />
              </ClassCard.Link>
            </div>
          </ClassCard.Heading>
        </ClassCard>
        <ClassCard className={"col-span-12 md:col-span-6"}>
          <ClassCard.Image src={img4} alt={"INDOOR CYCLING"} />
          <ClassCard.Heading title={"INDOOR CYCLING"} subTitle={"CARDIO"}>
            <div>
              <ClassCard.Link to={""}>
                <FaArrowUpRightFromSquare />
              </ClassCard.Link>
            </div>
          </ClassCard.Heading>
        </ClassCard>
        <ClassCard className={"col-span-12 lg:col-span-6"}>
          <ClassCard.Image src={img5} alt={"WEIGHTLIFTING"} />
          <ClassCard.Heading
            title={"BOXING"}
            subTitle={"TRAINING"}
          >
            <div>
              <ClassCard.Link to={""}>
                <FaArrowUpRightFromSquare />
              </ClassCard.Link>
            </div>
          </ClassCard.Heading>
        </ClassCard>
      </Section.Body>
    </Section>
  );
}

export default Classes;
