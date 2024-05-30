import { Link } from "react-router-dom";
import Section from "../components/UI/section";
import { Typography } from "@material-tailwind/react";
import { FaLongArrowAltRight } from "react-icons/fa";

function ErrorPage() {
  return (
    <Section className={"h-screen flex items-center"}>
      <Section.Body
        className={"flex flex-col justify-center items-center gap-4"}
      >
        <Typography
          className="text-center uppercase font-black text-orange-700"
          variant="h1"
        >
          Page Not Found
          <span className="text-red-900 block font-oswald">404</span>
        </Typography>
        <Link
          to={"/"}
          className={`flex items-center gap-2
          font-bold 
          transition-all 
          hover:scale-110 hover:text-orange-600 
          uppercase leading-none`}
        >
          <span className="text-xl">Home</span>
          <span className="mt-0.5">
            <FaLongArrowAltRight />
          </span>
        </Link>
      </Section.Body>
    </Section>
  );
}

export default ErrorPage;
