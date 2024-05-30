function InfoItems({ children, className, ...props }) {
  return (
    <div
      className={`${
        className || ""
      } grid grid-cols-3 max-sm:grid-cols-1`}
      {...props}
    >
      {children}
    </div>
  );
}

InfoItems.Item = function InfoItem({ Icon, className, children, ...props }) {
  return (
    <div
      className={`${className || ""} col-span-1 flex gap-4`}
      {...props}
    >
      {Icon && (
        <div className="min-w-max min-h-max">
          <Icon size={30} className={"text-orange-800"} />
        </div>
      )}
      <div className="min-w-min text-sm max-md:text-xs">{children}</div>
    </div>
  );
};

export default InfoItems;
