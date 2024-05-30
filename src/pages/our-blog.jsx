import Section from "../components/UI/section";
import Header from "../components/features/header";
import Timeline from "../components/features/our-blog/blog";
import RightSide from "../components/features/our-blog/right-side";

function Blog() {
  return (
    <div>
    <Header/>
    <Section>
      <Section.Body className={"grid grid-cols-12 w-full gap-4 px-2"}>
        <Timeline className={"lg:col-span-9 max-lg:col-span-12"} />
        <RightSide className={"lg:col-span-3 max-lg:col-span-12 max-w-96 max-md:mx-auto"}/>
      </Section.Body>
    </Section>
    </div>
  );
}

export default Blog;
