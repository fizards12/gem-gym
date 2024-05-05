import React from "react";

function Section({ children, className, ...props }) {
  return (
    <div className={`${className || ""} py-20 px-2`} {...props}>
      <div className={"container m-auto flex flex-col gap-7"}>
        {children}
      </div>
    </div>
  );
}

Section.Header = function Header({
  subTitle,
  title,
  children,
  className,
  ...props
}) {
  let content = (
    <div className={`${className || ""} text-base`}>
      <p className="text-orange-900 font-semibold">{subTitle}</p>
      <h3 className="text-3xl font-oswald font-extrabold">{title}</h3>
    </div>
  );
  if (!children) {
    return content;
  }
  return (
    <div
      className={`${
        className || ""
      } flex md:flex-row flex-col justify-between gap-3`}
    >
      {content}
      {children}
    </div>
  );
};

Section.Body = function Body({ children, className, ...props }) {
  return (
    <div className={`${className || ""}`} {...props}>
      {children}
    </div>
  );
};

export default Section;
