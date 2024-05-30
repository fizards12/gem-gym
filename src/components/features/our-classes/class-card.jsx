import { Card, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ClassCard({ children, className, ...props }) {
  return (
    <Card
      shadow={false}
      color="transparent"
      className={`${className || ""} bg-black bg-opacity-40 
      flex flex-col rounded-none
      hover:scale-105 hover:bg-opacity-100
      transition-all
      duration-300 
      `}
      {...props}
    >
      {children}
    </Card>
  );
}

ClassCard.Image = function CardImage({ alt, src, className, ...props }) {
  return (
    <div className={`${className || ""} w-full`} {...props}>
      <img className="w-full" src={src} alt={alt} />
    </div>
  );
};

ClassCard.Heading = function Heading({
  children,
  title,
  subTitle,
  className,
  ...props
}) {
  return (
    <CardHeader
      shadow={false}
      color="transparent"
      className={`${className || ""} font-oswald rounded-none 
      mt-0 py-3 
      flex justify-between items-center`}
    >
      <div className={`flex flex-col items-start gap-1 uppercase`}>
        <p className="text-orange-900 text-sm font-semibold">{subTitle}</p>
        <h3 className="text-xl font-extrabold">{title}</h3>
      </div>
      {children}
    </CardHeader>
  );
};

ClassCard.Link = function Lnk({ children, className, ...props }) {
  return (
    <Link
      className={`${className || ""} m-3 flex 
    hover:text-orange-500 hover:scale-110 transition-all`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ClassCard;
