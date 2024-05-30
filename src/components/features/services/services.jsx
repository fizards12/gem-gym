import React from "react";
import Section from "../../UI/section";
import ServicesCard from "./service-card";
import service1 from "../../../assets/services/services-1.jpg";
import service2 from "../../../assets/services/services-2.jpg";
import service3 from "../../../assets/services/services-3.jpg";
import service4 from "../../../assets/services/services-4.jpg";
function ServicesSection() {
  return (
    <Section>
      <Section.Header
        className={"text-center"}
        subTitle={"What we do?"}
        title={"push your limits forward"}
      />
      <Section.Body className={"grid lg:grid-cols-2 md:px-7 gap-5 grid-cols-1"}>
        <ServicesCard
          title={"Personal training"}
          img={service1}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit
          , sed do eiusmod tempor ut dolore facilisis.`}
        />
        <ServicesCard
          title={"Personal training"}
          img={service2}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit
          , sed do eiusmod tempor ut dolore facilisis.`}
        />
        <ServicesCard
          title={"Personal training"}
          img={service3}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit
          , sed do eiusmod tempor ut dolore facilisis.`}
        />
        <ServicesCard
          title={"Personal training"}
          img={service4}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit
          , sed do eiusmod tempor ut dolore facilisis.`}
        />
      </Section.Body>
    </Section>
  );
}

export default ServicesSection;
