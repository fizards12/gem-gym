import banner from "../../assets/banner-bg.jpg";
function Banner({children,title,subTitle}) {
  return (
    <div
      style={{ backgroundImage: `url(${banner})`, height: 500 }}
      className={`w-full 
      flex flex-col items-center justify-center gap-4
      bg-cover bg-no-repeat bg-center-top text-center`}
    >
      <h1 className="text-5xl font-extrabold font-oswald">
        {title}
      </h1>
      <p className="text-xl font-semibold text-gray-500">
        {subTitle}
      </p>
      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}

export default Banner;
