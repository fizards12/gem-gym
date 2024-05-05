import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";

function FeatureCard({ className,children, ...props }) {
  return (
    <Card color="transparent"
      className={`${className || ""} p-2
      flex flex-col text-white text-center rounded-md
      hover:bg-orange-600
      hover:bg-opacity-95
      group col-span-4
      md:col-span-2
      lg:col-span-1
      transition-colors 
      `}
    >{children}</Card>
  );
}

FeatureCard.Header = function Header({ children,Icon, className, ...props }) {
  return (
    <CardHeader
      shadow={false}
      color="transparent"
      className={`${className || ""} m-0
        mt-0 flex flex-col items-center text-white`}
        {...props}
    >
      {Icon && (
        <div
          className={`
          p-4 m-2 rounded-full 
          max-w-max bg-orange-600
          group-hover:text-orange-600 
          group-hover:bg-white transition-colors`}
        >
          <Icon size={40} />
        </div>
      )}
      <h4 className="text-xl font-oswald font-bold">{children}</h4>
    </CardHeader>
  );
};

FeatureCard.Body = function Body({ children, className, ...props }) {
  return (
    <CardBody
      className={`${className || ""} px-3
        text-gray-500 group-hover:text-orange-50 font-semibold`}
      {...props}
    >
      {children}
    </CardBody>
  );
};

export default FeatureCard;
