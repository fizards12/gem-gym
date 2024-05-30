import Section from "../components/UI/section";
import HeroHeader from "../components/features/blog-post-parts/header";
import img1 from "../assets/blog/details/details-1.jpg";
import img2 from "../assets/blog/details/details-2.jpg";
import comment1 from "../assets/blog/details/comment-1.jpg";
import comment2 from "../assets/blog/details/comment-2.jpg";
import comment3 from "../assets/blog/details/comment-3.jpg";
import authorImg from "../assets/blog/details/blog-profile.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import PopularTags from "../components/UI/chips";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaShareSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosHeart, IoIosMail } from "react-icons/io";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
} from "@material-tailwind/react";
import Inpt from "../components/UI/input";
import Footer from "../components/features/footer/footer";

const dumyDetails = {
  title:
    "WORKOUT NUTRITION EXPLAINED. WHAT TO EAT BEFORE, DURING, AND AFTER EXERCISE.",
  img: "../../../assets/blog/details/details-hero.jpg",
  publisher: "Admin",
  date: "20 Aug.15.2019",
  numOfComments: 20,
  details: {
    imgs: [img1, img2],
  },
  qouted: [
    {
      name: "MEIKE PETERS",
      message:
        "The whole family of tiny legumes, whether red, green, yellow, or black, offers so many possibilities to create an exciting lunch.",
    },
  ],
  shares: {
    facebook: 82,
    twitter: 24,
    mail: 8,
  },
  author_words: {
    name: "LENA MOLLEIN.",
    img: authorImg,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  comments: [
    {
      id: "c1",
      author: {
        name: "Brandon Kelley",
        img: comment1,
      },
      message:
        "Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur, adipisci velit dolore.",
      reply: [
        {
          id: "c2",
          author: {
            name: "Brandon Kelley",
            img: comment2,
          },
          message:
            "Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur, adipisci velit dolore.",
        },
      ],
    },
    {
      id: "c3",
      author: {
        name: "Brandon Kelley",
        img: comment3,
      },
      message:
        "Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur, adipisci velit dolore.",
      reply: [
        {
          id: "c4",
          author: {
            name: "Brandon Kelley",
            img: comment2,
          },
          message:
            "Neque porro quisquam est, qui dolorem ipsum dolor sit amet, consectetur, adipisci velit dolore.",
        },
      ],
    },
  ],
};
function BlogPost() {
  return (
    <div>
      <HeroHeader details={dumyDetails} />
      <Section>
        <Section.Body className={"text-center text-gray-500 max-w-3xl m-auto"}>
          <PostContent />
          <div className="py-10">
            <PopularTags className={"*:text-lg max-w-max m-auto"}>
              <Link to={""}>Body building</Link>
              <Link to={""}>Yoga</Link>
              <Link to={""}>Weightloss</Link>
              <Link to={""}>Streching</Link>
            </PopularTags>
          </div>
          <div className="py-5 flex gap-6 max-w-max m-auto">
            <span>SHARE</span>
            <div className="text-white flex gap-3">
              <a className="flex gap-1 items-center" href="#">
                <FaFacebookF size={20} />
                <span className="text-sm">{dumyDetails.shares.facebook}</span>
              </a>
              <a className="flex gap-1 items-center" href="#">
                <FaTwitter size={20} />
                <span className="text-sm">{dumyDetails.shares.twitter}</span>
              </a>
              <a className="flex gap-1 items-center" href="#">
                <IoIosMail size={20} />
                <span className="text-sm">{dumyDetails.shares.mail}</span>
              </a>
            </div>
          </div>
          <div className="py-10">
            <div className="relative p-10 bg-gray-950">
              <Avatar
                className={`absolute top-0 -translate-y-1/2 
                left-1/2 -translate-x-1/2 rounded-full`}
                size="xl"
                src={dumyDetails.author_words.img}
                alt={dumyDetails.author_words.name}
              />
              <div className="text-center mt-5">
                <h3 className="text-xl mb-5 font-bold font-oswald text-white">
                  {dumyDetails.author_words.name}
                </h3>
                <p>{dumyDetails.author_words.message}</p>
                <div className="flex gap-3 max-w-max m-auto mt-5">
                  <a href="#">
                    <FaFacebookF size={15} />
                  </a>
                  <a href="#">
                    <FaTwitter size={15} />
                  </a>
                  <a href="#">
                    <FaGooglePlusG size={15} />
                  </a>
                  <a href="#">
                    <FaInstagram size={15} />
                  </a>
                  <a href="#">
                    <FaYoutube size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              {dumyDetails.comments.map((comment) => (
                <Comment key={comment.id} comment={comment}>
                  {comment.reply.map((r)=>(
                    <Comment key={r.id} comment={r}/>
                  ))}
                </Comment>
              ))}
            </div>
            <div className="px-1 pt-10">
              <h3 className="text-2xl text-left text-white font-oswald font-bold mb-7 uppercase">Leave a Comment</h3>
              <form className="w-full max-w-md flex flex-col gap-4">
                <div className="flex flex-col gap-6">
                  <Inpt type="text" label="Name" />
                  <Inpt type="email" label="Email" />
                  <Inpt type="text" label="Website" />
                  <Textarea
                    className={`placeholder:opacity-40`}
                    size="md"
                    variant="outlined"
                    color="orange"
                    label="Comment"
                  />
                </div>
                <Button
                  className="w-full rounded"
                  type="submit"
                  variant="gradient"
                  color="deep-orange"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Section.Body>
      </Section>
      <Footer/>
    </div>
  );
}

function PostContent() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure Lorem ipsum dolor sit amet,
        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua accusantium doloremque laudantium. Excepteur sint
        occaecat cupidatat non proident sculpa .
      </p>
      <p className="my-8">
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem
        ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat anim id est laborum.
      </p>
      <div>
        <h3 className="text-lg font-bold font-oswald text-white mb-8">
          You Can Buy For Less Than A College Degree
        </h3>
        <p>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur officia deserunt
          mollit.
        </p>
        <div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 py-5">
            {dumyDetails.details.imgs.map((img, i) => (
              <img
                className="col-span-1 m-auto rounded-sm"
                key={i}
                src={img}
                alt="details"
              />
            ))}
          </div>
          <p>
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className="py-10 flex flex-col justify-stretch gap-5">
            {dumyDetails.qouted.map((q) => (
              <div
                className="relative p-5 border text-center border-gray-400"
                key={q.name}
              >
                <span
                  style={{ backgroundColor: "#151515" }}
                  className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 
                    p-3 rounded-full border border-gray-400 text-deep-orange-500`}
                >
                  <RiDoubleQuotesL size={25} />
                </span>
                <h6 className="text-lg font-bold text-white font-oswald">
                  {q.message}
                </h6>
                <p className="uppercase mt-3 font-semibold text-base">
                  {q.name}
                </p>
              </div>
            ))}
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in. .
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt laboris nisi ut aliquip commodo consequat.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris vel magna ex. Integer gravida
            tincidunt accumsan. Vestibulum nulla mauris, condimentum id felis
            ac, volutpat volutpat mi qui dolorem.
          </p>
        </div>
      </div>
    </>
  );
}

function Comment({ comment, className,children, ...props }) {
  return (
    <div>
      <Card
        shadow={false}
        color="transparent"
        className={`${className || ""} comment
        px-5 py-0 my-4 mx-0 rounded-none 
        relative before:absolute 
        before:top-0 before:left-0 
        before:h-full before:w-px before:bg-gray-800`}
        {...props}
      >
        <CardHeader
          shadow={false}
          color="transparent"
          className="m-0 rounded-none px-0 text-white flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <Avatar src={comment.author.img} alt={comment.author.name} />
            <h6 className="font-bold font-oswald uppercase">
              {comment.author.name}
            </h6>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="group">
              <IoIosHeart className="group-hover:fill-red-600 transition-all" />
            </a>
            <a href="#" className="group">
              <FaShareSquare className="group-hover:fill-blue-600 transition-all" />
            </a>
          </div>
        </CardHeader>
        <CardBody className="py-2 px-0 text-left">{comment.message}</CardBody>
      </Card>
      <div className="ms-5">{children}</div>
    </div>
  );
}

export default BlogPost;
