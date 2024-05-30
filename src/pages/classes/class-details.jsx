import Section from "../../components/UI/section";
import RightSide from "../../components/features/our-blog/right-side";
import headingImg from "../../assets/classes/class-details/class-detailsl.jpg";
import trainerImg from "../../assets/classes/class-details/trainer-profile.jpg";
import ClassContent from "../../components/features/class-details/class-content";
import TableBreadCrumbs from "../../components/features/timetable/bread-crumbs";
import Table from "../../components/features/timetable/table";
import { useCallback, useState } from "react";
const dumyClass = {
  headingImg: {
    src: headingImg,
    alt: "Body Building",
  },
  class: {
    title: "Body Building",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. 
    Excepteur sint occaecat cupidatat non proident sculpa.`,
  },
  trainer:{
    name:"Athart Rachel",
    major: "GYM TRAINER",
    summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.`,
    age:35,
    weight:148,
    height:"10' 2``",
    occupation: "no-founder",
    img: trainerImg
  }
};
function ClassDetials() {
  return (
    <Section>
      <Section.Body>
        <div className={"grid grid-cols-12 w-full px-2 gap-y-12"}>
          <ClassContent className={"lg:col-span-8 lg:!pe-10 text-gray-500 max-lg:col-span-12"} details={dumyClass}/>
          <RightSide
            className={
              "lg:col-span-4 max-lg:col-span-12 md:max-w-96 max-md:mx-auto"
            }
          />
        </div>
        <TimeTable/>
      </Section.Body>
    </Section>
  );
}

function TimeTable() {
  const [category, setCategory] = useState("all");
  const clickHandler = useCallback((e) => {
    e.preventDefault();
    setCategory(e.target.getAttribute("href"));
  }, []);

  return (
    <Section>
      <Section.Header
        className={"!gap-5"}
        title={"find your time"}
        subTitle={"find your time"}
      >
      <TableBreadCrumbs onClick={clickHandler} category={category}/>      
      </Section.Header>
      <Section.Body>
        <Table className={"w-max max-w-full"} category={category}/>
      </Section.Body>
    </Section>
  );
}


export default ClassDetials;
