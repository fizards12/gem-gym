import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";

function PriceCard({ children, className, ...props }) {
  return (
    <Card
      shadow={false}
      className={`${className || ""} flex flex-col 
       max-w-80 w-full px-4 pt-6 pb-3
       bg-gray-900 text-orange-700
       group
       hover:bg-orange-600 hover:scale-105 hover:text-white duration-300 transition-all`}
      {...props}
    >
      {children}
    </Card>
  );
}

PriceCard.Title = function Heading({ title, className, ...props }) {
  return (
    <CardHeader
      color="transparent"
      shadow={false}
      className={`${
        className || ""
      } mt-0 text-orange-100 font-oswald font-semibold text-center text-2xl`}
      {...props}
    >
      {title}
    </CardHeader>
  );
};

PriceCard.Price = function Price({ amount, planName, className, ...props }) {
  return (
    <div
      className={`${className || ""} flex flex-col items-center gap-1`}
      {...props}
    >
      <span className="text-5xl font-oswald font-extrabold">${amount}</span>
      <span className="text-base font-semibold">{planName}</span>
    </div>
  );
};

PriceCard.Body = function Body({ className, children, ...props }) {
  return (
    <CardBody className={`${className || ""} flex flex-col p-2`} {...props}>
      {children}
    </CardBody>
  );
};

PriceCard.Features = function List({ children, className, ...props }) {
  return (
    <ul
      className={`${className || ""} flex flex-col gap-2 list-none`}
      {...props}
    >
      {children}
    </ul>
  );
};

PriceCard.Action = function CardButton({ children, className, ...props }) {
  return (
    <div className="mt-10">
      <Button
        className={`${className || ""} 
        bg-orange-600 group-hover:bg-gray-900 w-full`}
      >
        {children}
      </Button>
    </div>
  );
};

export default PriceCard;
