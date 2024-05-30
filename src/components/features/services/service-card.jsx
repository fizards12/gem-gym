import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function ServicesCard({ img, title, content, to }) {
  return (
    <Card
      color="gray"
      shadow={false}
      className="grid sm:grid-cols-2 max-sm:max-w-96 m-auto grid-cols-1 rounded-none col-span-1 p-0 group"
    >
      <CardHeader
        color="transparent"
        shadow={false}
        className="sm:h-full col-span-1 rounded-none m-0"
      >
        <img
          className="sm:h-full max-sm:w-full group-hover:scale-110 transition-transform duration-300"
          src={img}
        />
      </CardHeader>
      <CardBody className="w-full py-7 px-5 col-span-1 gap-2 flex flex-col justify-evenly">
        <h3 className="text-3xl max-xl:text-2xl font-oswald font-bold">
          {title}
        </h3>
        <p className="opacity-60">{content}</p>
        <Link
          className={`uppercase text-lg max-lg:text-base font-semibold 
          group-hover:text-orange-800 transition-colors`}
          to={to || ""}
        >
          explore
        </Link>
      </CardBody>
    </Card>
  );
}

export default ServicesCard;
