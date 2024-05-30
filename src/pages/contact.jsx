import Header from "../components/features/header";
import Footer from "../components/features/footer/footer";
import Section from "../components/UI/section";
import InfoItems from "../components/features/gym-info/info";
import { IoLocation, IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Inpt from "../components/UI/input";
import { Button, Textarea } from "@material-tailwind/react";

function Contact() {
  return (
    <div>
      <Header title={"CONTACT"} />
      <Section className={"md:px-20"}>
        <Section.Body>
          <div className="flex max-md:flex-col gap-10">
            <div className="px-1 w-full">
              <InfoItems className={" sm:!grid-cols-1 justify-center gap-10"}>
                <Section.Header
                  className={"col-span-1"}
                  title={"GET IN TOUCH"}
                  subTitle={"CONTACT US"}
                />
                <InfoItems.Item Icon={IoLocation}>
                  333 Middle Winchendon Rd, Rindge, NH 03461
                </InfoItems.Item>
                <InfoItems.Item Icon={FaPhone}>
                  <div className="flex gap-2 items-center flex-wrap">
                    <p>125-711-811</p>
                    <hr className="rotate-90 w-4 bg-gray-900 opacity-40" />
                    <p>125-668-886</p>
                  </div>
                </InfoItems.Item>
                <InfoItems.Item Icon={IoMail}>
                  Support.gymcenter@gmail.com
                </InfoItems.Item>
              </InfoItems>
            </div>
            <div className="w-full px-1">
              <form className="w-full m-auto flex flex-col gap-4">
                <div className="flex flex-col gap-6">
                  <Inpt type="text" label="Name" />
                  <Inpt type="email" label="Email" />
                  <Inpt type="text" label="Website" />
                  <Textarea
                    className={`placeholder:opacity-40`}
                    size="md"
                    variant="outlined"
                    color="orange"
                    label="Comment"
                  />
                </div>
                <Button
                  className="w-full rounded"
                  type="submit"
                  variant="gradient"
                  color="deep-orange"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className="w-full p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
              height="550"
              className="border-0 w-full"
              allowFullScreen
            ></iframe>
          </div>
        </Section.Body>
      </Section>
      <Footer />
    </div>
  );
}

export default Contact;
