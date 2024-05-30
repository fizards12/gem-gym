import Section from "../../UI/section";
import GymInfo from "../gym-info/gym-info";
import logo from "../../../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

const headingClass = "text-white font-oswald font-extrabold text-xl mb-3";
const paragraphClass = "text-gray-400 text-base";
const linkClass = "text-gray-400 hover:text-white transition-colors";

function Footer() {
  return (
    <div>
      <GymInfo />
      <Section
        className={"bg-black border-t-2 border-b-2 border-gray-900 !p-0"}
      >
        <Section.Body>
          <div className={"grid grid-cols-3 gap-6 py-6 md:px-16 px-4"}>
            <Description />
            <div className="col-span-3 lg:col-span-2 gap-6 flex max-md:flex-col">
              <div className="flex max-sm:flex-col w-full gap-6">
                <UsefulLinks />
                <Support />
              </div>
              <TipsGuides />
            </div>
          </div>
          <hr  className="border-gray-800"/>
          <div className="p-4 text-center text-gray-600">
            Copyright ©2024 All rights reserved | This template is made by{" "}
            <span className="text-orange-600 font-bold font-oswald">
              Colorlib
            </span>{" "}
            and rebuilt by{" "}
            <span className="text-orange-600 font-bold font-oswald">
              Mahmoud Sameh
            </span>
          </div>
        </Section.Body>
      </Section>
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-col col-span-3 lg:col-span-1 gap-2">
      <div className={"min-h-7 h-9 mb-5"}>
        <img src={logo} className={"h-full"} alt="Logo" />
      </div>
      <div className={`${paragraphClass}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida
        lorem.
      </div>
      <div className="flex gap-3">
        <a href="#" className={linkClass}>
          <FaFacebookF size={17} />
        </a>
        <a href="#" className={linkClass}>
          <FaXTwitter size={17} />
        </a>
        <a href="#" className={linkClass}>
          <FaYoutube size={17} />
        </a>
        <a href="#" className={linkClass}>
          <FaInstagram size={17} />
        </a>
        <a href="#" className={linkClass}>
          <IoMail size={17} />
        </a>
      </div>
    </div>
  );
}

function UsefulLinks() {
  return (
    <div className="w-full">
      <h3 className={headingClass}>Useful Links</h3>
      <ul className="flex flex-col gap-2 ps-0">
        <li>
          <Link to={"/about"} className={linkClass}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/blog"} className={linkClass}>
            Blog
          </Link>
        </li>
        <li>
          <Link to={"/classes"} className={linkClass}>
            Classes
          </Link>
        </li>
        <li>
          <Link to={"contact"} className={linkClass}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
function Support() {
  return (
    <div className="w-full">
      <h3 className={headingClass}>Support</h3>
      <ul className="flex flex-col gap-2 ps-0">
        <li>
          <Link to={"/"} className={linkClass}>
            Login
          </Link>
        </li>
        <li>
          <Link to={"/"} className={linkClass}>
            My account
          </Link>
        </li>
        <li>
          <Link to={"/"} className={linkClass}>
            Subscribe
          </Link>
        </li>
        <li>
          <Link to={"/"} className={linkClass}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

function TipsGuides() {
  return (
    <div className="w-full">
      <h3 className={headingClass}>Tips & Guides</h3>
      <ul className="flex flex-col ps-0 gap-2">
        <li>
          <p className="min-w-min font-bold text-gray-400 mb-2">
            Physical fitness may help prevent depression, anxiety
          </p>
          <div className="flex gap-2 items-center text-gray-600 text-opacity-40">
            <span>3 min read</span>
            <hr className="rotate-90 w-5 h-px bg-gray-600 opacity-30" />
            <span>20 Comment</span>
          </div>
        </li>
        <li>
          <p className="min-w-min font-bold text-gray-400 mb-2">
            Fitness: The best exercise to lose belly fat and tone up...
          </p>
          <div className="flex gap-2 text-gray-600 items-center text-opacity-40">
            <span>3 min read</span>
            <hr className="rotate-90 w-5 h-px bg-gray-600 opacity-30" />
            <span>20 Comment</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
