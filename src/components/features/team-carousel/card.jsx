function Coach({ className, img, name, title, ...props }) {
  return (
    <div
      className={`${className || ""} group isolate px-2`}
      {...props}
    >
    <div className="relative w-full rounded-md overflow-hidden">
      <img src={img} className="w-full -z-10 group-hover:scale-105 group-hover:blur-md transition-all duration-300" alt={name} />
      {/* Card Backdrop */}
      <div
        className={`absolute w-full h-full top-0 left-0 flex transition-opacity duration-300 opacity-0 items-center text-center p-4
                    hover:opacity-100 bg-orange-900 bg-opacity-10`}
      >
        <div className="w-full">
          <h3 className="text-3xl font-oswald font-extrabold text-gray-400">{name}</h3>
          <p className="text-base font-semibold text-gray-500">{title}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Coach;
