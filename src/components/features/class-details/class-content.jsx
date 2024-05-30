function ClassContent({ className, details, ...props }) {
  return (
    <div className={`${className || ""} flex flex-col gap-6`} {...props}>
      <div className="w-full">
        <img className="w-full" src={details.headingImg.src} alt={details.headingImg.alt} />
      </div>
      <div>
        <h3 className="text-3xl text-white font-oswald uppercase font-bold mb-5">
          {details.class.title}
        </h3>
        <p>{details.class.content}</p>
      </div>
      <div>
        <h3 className="text-3xl text-white font-oswald uppercase font-bold mb-5">
          trainer
        </h3>
        <p>
          Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur officia deserunt
          mollit.
        </p>
      </div>
      <div className="flex max-md:flex-col md:gap-6 max-md:gap-4">
        <div className="w-full">
            <img className="w-full" src={details.trainer.img} alt={details.trainer.name}/>
        </div>
        <div className="w-full flex flex-col gap-3">
            <div>
                <h3 className="text-xl text-white font-oswald uppercase font-bold">{details.trainer.name}</h3>
                <p>{details.trainer.major}</p>
            </div>
            <p>
                {details.trainer.summary}
            </p>
            <ul className="flex flex-col gap-6">
                <li className="flex border-b border-gray-900 pb-2">
                    <p className="font-bold text-white w-full">Age</p>
                    <p className="w-full">{details.trainer.age}</p>
                </li>
                <li className="flex border-b border-gray-900 pb-2">
                    <p className="font-bold text-white w-full">Weight</p>
                    <p className="w-full">{details.trainer.weight}Ibs</p>
                </li>
                <li className="flex border-b border-gray-900 pb-2">
                    <p className="font-bold text-white w-full">Height</p>
                    <p className="w-full">{details.trainer.height}</p>
                </li>
                <li className="flex border-b border-gray-900 pb-2">
                    <p className="font-bold text-white w-full">Occupation</p>
                    <p className="w-full">{details.trainer.occupation}</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default ClassContent;
