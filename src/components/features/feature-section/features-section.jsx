import Section from "../../UI/section";
import { TbTreadmill } from "react-icons/tb";
import { IoFitnessSharp } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { GiFruitBowl } from "react-icons/gi";
import FeatureCard from "./feature-card";

function Features() {
  return (
    <Section className={"bg-gray-950"}>
      <Section.Header
        className={"text-center"}
        title={"PUSH YOUR LIMITS FORWARD"}
        subTitle={"WHY CHOOSE US?"}
      />
      <Section.Body
        className={"m-auto grid grid-cols-4 p-2 justify-center items-start"}
      >
        <FeatureCard>
          <FeatureCard.Header Icon={TbTreadmill}>
            Modern equipment
          </FeatureCard.Header>
          <FeatureCard.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </FeatureCard.Body>
        </FeatureCard>
        <FeatureCard>
          <FeatureCard.Header Icon={GiFruitBowl}>
          Healthy nutrition plan
          </FeatureCard.Header>
          <FeatureCard.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </FeatureCard.Body>
        </FeatureCard>
        <FeatureCard>
          <FeatureCard.Header Icon={IoMdFitness}>
          Proffesponal training plan
          </FeatureCard.Header>
          <FeatureCard.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </FeatureCard.Body>
        </FeatureCard>
        <FeatureCard>
          <FeatureCard.Header Icon={IoFitnessSharp}>
          Unique to your needs
          </FeatureCard.Header>
          <FeatureCard.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </FeatureCard.Body>
        </FeatureCard>
      </Section.Body>
    </Section>
  );
}

export default Features;
