import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import useBelowMaxPoint from "../../hooks/use-belowMaxPoint";
import Backdrop from "./backdrop";

function Nav({ children, ...props }) {
  return (
    <nav
      className="absolute top-0 z-10 px-9 pt-11 flex gap-4 justify-between items-center w-full"
      {...props}
    >
      {children}
    </nav>
  );
}

Nav.Offcanvas = function Offcanvas({ children, ...props }) {
  const isBreaked = useBelowMaxPoint(768);
  const [show, setShow] = useState(false);

  if (isBreaked) {
    let state = "-translate-y-full";
    if (show) {
      state = "";
    }
    return (
      <>
        {
          <div
            className={`flex flex-col ease-in-out gap-2 translate-y ${state}  
            pb-3 absolute z-30 top-0 left-0 
            w-full bg-gray-800
            transition-all`}
            {...props}
          >
            {children}
          </div>
        }
        <div className="">
          <button
            className={`flex border-0 bg-transparent 
            hover:text-orange-500 transition-colors duration-300`}
            onClick={() => setShow((state) => !state)}
          >
            <CgMenuGridO size={35} />
          </button>
        </div>
        {show && <Backdrop onClick={() => setShow((s) => !s)} />}
      </>
    );
  } else {
    return <>{children}</>;
  }
};

Nav.Logo = function Logo() {
  return (
    <div className={"min-h-7 h-9"}>
      <img src={logo} className={"h-full"} alt="Logo" />
    </div>
  );
};

Nav.List = function List({ children, ...props }) {
  return (
    <div
      className={`flex md:gap-2
    flex-col md:flex-row md:flex-wrap md:justify-center`}
      {...props}
    >
      {children}
    </div>
  );
};

Nav.NavLink = function Link({ children, className, activeClass, ...props }) {
  const defaultActive = `md:text-orange-600 md:bg-transparent md:hover:text-orange-600
  text-orange-100 bg-orange-600`;
  return (
    <NavLink
      className={({ isActive }) =>
        `font-bold uppercase text-sm md:hover:text-orange-600
         ${
           isActive
             ? activeClass || defaultActive
             : "hover:bg-orange-600 md:hover:bg-transparent"
         }
         ${className}
         transition-colors duration-300
         md:p-0 p-2`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
};

Nav.SocialIcons = function Icons({ ...props }) {
  return (
    <div className="flex gap-5 w-full md:w-auto justify-center">
      <a
        className={"hover:text-blue-900 decoration-0 transition-colors"}
        href="#"
      >
        <FaFacebookF size={20} />
      </a>
      <a className={"hover:text-light-blue-600 transition-colors"} href="#">
        <FaTwitter size={20} />
      </a>
      <a className={"hover:text-red-600 transition-colors"} href="#">
        <SiYoutube size={20} />
      </a>
      <a className={`hover:text-pink-600 transition-colors`} href="#">
        <FaInstagram size={20} />
      </a>
    </div>
  );
};

export default Nav;
