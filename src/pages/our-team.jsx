import Header from "../components/features/header";
import Footer from "../components/features/footer/footer";
import coach2 from "../assets/team/team-2.jpg";
import coach3 from "../assets/team/team-3.jpg";
import coach4 from "../assets/team/team-4.jpg";
import Coach from "../components/features/team-carousel/card";
import Section from "../components/UI/section";
import { Button } from "@material-tailwind/react";

function TeamPage() {
  return (
    <>
      <Header />
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
        <Section.Body
          className={
            "grid max-sm:grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          <Coach
            className={"col-span-1 px-2"}
            img={coach2}
            name={"Athert Rachel"}
            title={"GYM TRAINER"}
          />
          <Coach
            className={" gap-y-2col-span-1 px-2"}
            img={coach3}
            name={"Athert Rachel"}
            title={"GYM TRAINER"}
          />
          <Coach
            className={" gap-y-2col-span-1 px-2"}
            img={coach4}
            name={"Athert Rachel"}
            title={"GYM TRAINER"}
          />
          <Coach
            className={" gap-y-2col-span-1 px-2"}
            img={coach2}
            name={"Athert Rachel"}
            title={"GYM TRAINER"}
          />
          <Coach
            className={" gap-y-2col-span-1 px-2"}
            img={coach3}
            name={"Athert Rachel"}
            title={"GYM TRAINER"}
          />
          <Coach
            className={" gap-y-2col-span-1 px-2"}
            img={coach4}
            name={"Athert Rachel"}
            title={"GYM TRAINER"}
          />
        </Section.Body>
      </Section>
      <Footer />
    </>
  );
}

export default TeamPage;
