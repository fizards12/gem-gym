import hero from "../../../assets/blog/details/details-hero.jpg";



function HeroHeader({details}) {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className={`h-900 bg-center-top max-sm:h-auto p-32 max-md:px-10 flex justify-center items-center`}
    >
      <div className={`bg-black bg-opacity-70 p-16 max-sm:p-10 rounded items-center text-center flex flex-col gap-4`}>
        <h1 className="text-3xl max-md:text-xl max-sm:text-xl font-extrabold font-oswald uppercase">
          {details.title}
        </h1>
        <div className="flex opacity-60 *:text-sm md:*:text-base items-center max-sm:flex-col">
            <p>{details.publisher}</p>
            <hr className="rotate-90 w-5 m-2 max-sm:rotate-0"/>
            <p>{details.date}</p>
            <hr className="rotate-90 w-5 m-2 max-sm:rotate-0"/>
            <p>{details.numOfComments} Comments</p>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
