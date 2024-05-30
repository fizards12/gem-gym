import PostCard from "./post-card";
import blog1 from "../../../assets/blog/blog-1.jpg";
import blog2 from "../../../assets/blog/blog-2.jpg";
import blog3 from "../../../assets/blog/blog-3.jpg";
import blog4 from "../../../assets/blog/blog-4.jpg";
import blog5 from "../../../assets/blog/blog-5.jpg";
import { useState } from "react";
function BlogPosts({ className }) {
  return (
    <div className={`${className} xl:mx-28 max-md:m-auto  flex flex-col gap-5`}>
      <div className={`flex flex-col gap-10`}>
        <PostCard
          title={
            "Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
          }
          publisher={"Admin"}
          date={"Aug.15.2019"}
          numOfComments={20}
          img={blog1}
          describtion={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis."
          }
        />
        <PostCard
          title={
            "Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
          }
          publisher={"Admin"}
          date={"Aug.15.2019"}
          numOfComments={20}
          img={blog2}
          describtion={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis."
          }
        />
        <PostCard
          title={
            "Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
          }
          publisher={"Admin"}
          date={"Aug.15.2019"}
          numOfComments={20}
          img={blog3}
          describtion={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis."
          }
        />
        <PostCard
          title={
            "Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
          }
          publisher={"Admin"}
          date={"Aug.15.2019"}
          numOfComments={20}
          img={blog4}
          describtion={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis."
          }
        />
        <PostCard
          title={
            "Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler..."
          }
          publisher={"Admin"}
          date={"Aug.15.2019"}
          numOfComments={20}
          img={blog5}
          describtion={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis."
          }
        />
      </div>
      <Pagination>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </Pagination>
    </div>
  );
}

export default BlogPosts;

function Pagination({ className, children,onClick=()=>{} }) {
    const [active,setActive] = useState(0);
    const activatePage = (pageNum)=>(e)=>{
        e.preventDefault();
        setActive(pageNum);
        onClick();
    }
    return (
    <div className={`${className || ""} flex gap-3 items-center`}>
      {children.map((c, i) => {
        return (
          <a
            href="#"
            className={`${active === i? "!bg-opacity-100":""}
            flex justify-center items-center px-4 py-2
            bg-black bg-opacity-0 hover:bg-opacity-40 transition-colors rounded-full `}
            key={i}
            onClick={activatePage(i)}
          >
            {c}
          </a>
        );
      })}
      <a
            href="#"
            className={`flex justify-center items-center
            rounded-full px-4 py-2 
            bg-black active:bg-opacity-80 hover:bg-opacity-40 transition-colors`}
            onClick={(e) => e.preventDefault()}
          >
            Next
          </a>
    </div>
  );
}
