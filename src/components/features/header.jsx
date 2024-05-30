import { Breadcrumbs } from "@material-tailwind/react";
import img from "../../assets/breadcrumb-bg.jpg";
import { NavLink, useLocation } from "react-router-dom";

const Separator = () => (
  <span className="text-xl font-extrabold text-white">{"/"}</span>
);

function Header() {
  const location = useLocation();
  const pages = location.pathname.split("/");
  return (
    <div
      style={{ backgroundImage: `url(${img})`, height: "500px" }}
      className="bg-center-top bg-cover w-full text-center flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl max-md:text-3xl font-bold font-oswald uppercase mb-3">
        {pages[pages.length-1].split("-").join(" ")}
      </h1>
      <Breadcrumbs separator={<Separator />} className="bg-transparent">
        <CrumbLink to={"/"}>Home</CrumbLink>
        {pages.map(
          (p, i) =>
            i > 0 &&
            (i === pages.length - 1 ? (
              <CrumbLink to={`/${pages.slice(1, i + 1).join("/")}`} key={i}>
                {p}
              </CrumbLink>
            ) : (
              <CrumbLink to={`/${pages.slice(1, i + 1).join("/")}`} key={i}>
                {p}
              </CrumbLink>
            ))
        )}
      </Breadcrumbs>
    </div>
  );
}

function CrumbLink({ className, children, ...props }) {
  const pathName = useLocation().pathname;
  const cls = `${className} hover:scale-125 text-lg font-bold font-oswald transition-transform duration-300 uppercase ${
    pathName === props.to ? "text-orange-600" : "text-white"
  }`;
  return (
    <NavLink className={cls} {...props}>
      {children}
    </NavLink>
  );
}

export default Header;
