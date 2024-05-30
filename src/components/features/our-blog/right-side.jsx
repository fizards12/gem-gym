import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PopularTags from "../../UI/chips";
import post1 from "../../../assets/letest-blog/latest-1.jpg";
import post2 from "../../../assets/letest-blog/latest-2.jpg";
import post3 from "../../../assets/letest-blog/latest-3.jpg";
import post4 from "../../../assets/letest-blog/latest-4.jpg";
import post5 from "../../../assets/letest-blog/latest-5.jpg";

const types = [
  { name: "Yoga", num: 12 },
  { name: "Running", num: 32 },
  { name: "Weightloss", num: 86 },
  { name: "Cario", num: 25 },
  { name: "Body building", num: 36 },
  { name: "Nutrition", num: 15 },
];

const posts = [
  {
    id: "p1",
    title: "This Japanese Way of Making Iced Coffee Is a Game...",
    date: "Aug 20, 2019",
    comments: 20,
    img: post1,
  },
  {
    id: "p2",
    title: "Grilled Potato and Green Bean Salad",
    date: "Aug 15, 2019",
    comments: 20,
    img: post2,
  },
  {
    id: "p3",
    title: "The $8 French Rosé I Buy in Bulk Every Summer",
    date: "Aug 15, 2019",
    comments: 20,
    img: post3,
  },
  {
    id: "p4",
    title: "Ina Garten's Skillet-Roasted Lemon Chicken",
    date: "Aug 15, 2019",
    comments: 20,
    img: post4,
  },
  {
    id: "p5",
    title: "The Best Weeknight Baked Potatoes, 3 Creative Ways",
    date: "Aug 15, 2019",
    comments: 20,
    img: post5,
  },
];

function RightSide({ className }) {
  return (
    <div className={`${className || ""} flex flex-col gap-11`}>
      <PostsTypes />
      <FeaturePosts posts={posts} />
      <div>
        <h3 className="uppercase text-xl font-bold font-oswald mb-5">
          Popular Tags
        </h3>
        <PopularTags>
          <span>Gyming</span>
          <span>Body building</span>
          <span>Yoga</span>
          <span>Weightloss</span>
          <span>Proffeponl</span>
          <span>Streching</span>
          <span>Cardio</span>
          <span>Karate</span>
        </PopularTags>
      </div>
    </div>
  );
}

function PostsTypes({ className, classesTypes }) {
  const classes = classesTypes || types;
  const clickHandler = (e) => e.preventDefault();
  return (
    <div className={`${className}`}>
      <h3 className="uppercase text-xl font-oswald font-bold">Categories</h3>
      <div>
        {classes.map((c, i) => (
          <a
            href="#"
            className="flex justify-between text-gray-500 font-body items-center py-2 *:duration-300 *:transition-colors group"
            key={i}
            onClick={clickHandler}
          >
            <span className="group-hover:text-orange-900">{c.name}</span>
            <span className="group-hover:text-white">{c.num}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function FeaturePosts({ className, posts }) {
  return (
    <div className={`${className || ""}`}>
      <h3 className="uppercase text-xl font-bold font-oswald mb-5">
        Feature Posts
      </h3>
      <div className="flex flex-col gap-4">
        {posts.map((p, i) => {
          if (p.id === "p1") {
            return <MainFeaturePost key={i} details={p} />;
          }
          return <SidePost key={i} details={p} />;
        })}
      </div>
    </div>
  );
}

function MainFeaturePost({ className, details }) {
  return (
    <Card
      color={"transparent"}
      shadow={false}
      className={`${className || ""} border-0 w-full text-white relative m-0`}
    >
      <CardHeader
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={details.img} className="w-full" />
      </CardHeader>
      <CardBody className={`absolute bottom-0 w-full p-6`}>
        <Link to={details.id} className="text-lg font-oswald font-bold">
          {details.title}
        </Link>
        <div className="flex gap-2 text-xs items-center text-gray-500">
          <span>{details.date}</span>
          <hr className="rotate-90 w-3" />
          <span>{details.comments} Comments</span>
        </div>
      </CardBody>
    </Card>
  );
}

function SidePost({ className, details }) {
  return (
    <Card
      color={"transparent"}
      shadow={false}
      className={`${
        className || ""
      } border-0 flex-row w-full text-white m-0 relative`}
    >
      <CardHeader
        shadow={false}
        color="transparent"
        className="w-1/2 m-0 rounded-none"
      >
        <img src={details.img} className={`w-full h-full`} />
      </CardHeader>
      <CardBody className="flex flex-col w-full p-0 ps-5">
        <Link to={details.id} className="max-lg:text-base font-oswald">
          {details.title}
        </Link>
        <span className="text-xs text-gray-500 mt-1">{details.date}</span>
      </CardBody>
    </Card>
  );
}

export default RightSide;
