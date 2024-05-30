import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function PostCard({ title,to="1", publisher, describtion, date, img, numOfComments }) {
  return (
    <Card
      className={`md:flex-row md:max-h-60 md:h-screen
                border border-gray-600 text-white rounded-sm 
                max-md:max-w-96 w-full`}
      color="transparent"
    >
      <CardHeader
        shadow={false}
        color="transparent"
        className="m-0 rounded-none w-full"
      >
        <img className="w-full" src={img} alt={title} />
      </CardHeader>
      <CardBody className="flex flex-col gap-3 w-full">
        <Link to={to} className="font-oswald text-lg font-bold">{title}</Link>
        <div className="flex gap-3 opacity-60 text-xs items-center">
          <span>By {publisher}</span>
          <hr className="w-3 rotate-90" />
          <span>{date}</span>
          <hr className="w-3 rotate-90" />
          <span>{numOfComments} Comments</span>
        </div>
        <div className="opacity-80 text-sm">{describtion}</div>
      </CardBody>
    </Card>
  );
}

export default PostCard;
