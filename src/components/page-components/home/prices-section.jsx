import React from "react";
import Section from "../../UI/section";
import PriceCard from "./price-card";
import { Button } from "@material-tailwind/react";

function Prices() {
  return (
    <Section>
      <Section.Header
        title={"CHOOSE YOUR PRICING PLAN"}
        subTitle={"OUR PLAN"}
      />
      <Section.Body
        className={
          "flex md:justify-center max-md:flex-col max-md:items-center md:items-stretch gap-3"
        }
      >
        <PriceCard>
          <PriceCard.Title title={"Class drop-in"} />
          <PriceCard.Body className={"gap-2"}>
            <PriceCard.Price amount={"39.0"} planName={"SINGLE CLASS"} />
            <PriceCard.Features>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </PriceCard.Features>
          <PriceCard.Action>Enroll Now</PriceCard.Action>
          </PriceCard.Body>
        </PriceCard>
        <PriceCard>
          <PriceCard.Title title={"Class drop-in"} />
          <PriceCard.Body className={"gap-2"}>
            <PriceCard.Price amount={"39.0"} planName={"SINGLE CLASS"} />
            <PriceCard.Features>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </PriceCard.Features>
          </PriceCard.Body>
        <PriceCard.Action>Enroll Now</PriceCard.Action>
        </PriceCard>
        <PriceCard>
          <PriceCard.Title title={"Class drop-in"} />
          <PriceCard.Body className={"gap-2"}>
            <PriceCard.Price amount={"39.0"} planName={"SINGLE CLASS"} />
            <PriceCard.Features>
              <li>Free riding</li>
              <li>Unlimited equipments</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>Month to mouth</li>
              <li>No time restriction</li>
            </PriceCard.Features>
          <PriceCard.Action>Enroll Now</PriceCard.Action>
          </PriceCard.Body>
        </PriceCard>
      </Section.Body>
    </Section>
  );
}

export default Prices;
