function Table({ className, category, ...props }) {
  return (
    <div
      className={`max-lg:overflow-x-scroll p-4 scrollbar-thin scrollbar-track`}
    >
      <table
        className={`${className} border-collapse bg-blue-gray-900 table-fixed 
      lg:w-full max-lg:min-w-max bg-opacity-10 rounded-md overflow-hidden table `}
        {...props}
      >
        <thead className="table-header-group">
          <tr className="border border-gray-900">
            <Th className={"!bg-transparent"}></Th>
            <Th>Monday</Th>
            <Th>Tuesday</Th>
            <Th>Wednesday</Th>
            <Th>Thursday</Th>
            <Th>Friday</Th>
            <Th>Saturday</Th>
            <Th>Sunday</Th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-900">
            <ThRow>6.00am - 8.00am</ThRow>
            <ClassTime
              category={category}
              classType={"workout"}
              session={"WEIGHT LOOSE"}
              caoch={"RLefew D. Loee"}
            />
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"CARDIO"}
              caoch={"RLefew D. Loee"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"YOGA"}
              caoch={"Keaf Shen"}
            />
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"FITNESS"}
              caoch={"Kimberly Stone"}
            />
            <ClassTime disabled />
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"BOXING"}
              caoch={"Rachel Adam"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"BODY BUILDING"}
              caoch={"Robert Cage"}
            />
          </tr>
          <tr className="border border-gray-900">
            <ThRow>10.00am - 12.00am</ThRow>
            <ClassTime disabled />
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"FITNESS"}
              caoch={"Kimberly Stone"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"WEIGHT LOOSE"}
              caoch={"RLefew D. Loee"}
            />
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"CARDIO"}
              caoch={"RLefew D. Loee"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"BODY BUILDING"}
              caoch={"Robert Cage"}
            />
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"KARATE"}
              caoch={"Donald Grey"}
            />
            <ClassTime disabled />
          </tr>
          <tr className="border border-gray-900">
            <ThRow>5.00pm - 7.00pm</ThRow>
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"BOXING"}
              caoch={"Rachel Adam"}
            />
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"KARATE"}
              caoch={"Donald Grey"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"BODY BUILDING"}
              caoch={"Robert Cage"}
            />
            <ClassTime disabled />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"YOGA"}
              caoch={"Keaf Shen"}
            />
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"CARDIO"}
              caoch={"RLefew D. Loee"}
            />
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"FITNESS"}
              caoch={"Kimberly Stone"}
            />
          </tr>
          <tr className="border border-gray-900">
            <ThRow>7.00pm - 9.00pm</ThRow>
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"CARDIO"}
              caoch={"RLefew D. Loee"}
            />
            <ClassTime disabled />
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"BOXING"}
              caoch={"Rachel Adam"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"YOGA"}
              caoch={"Keaf Shen"}
            />
            <ClassTime
              category={category}
              classType={"motivation"}
              session={"KARATE"}
              caoch={"Donald Grey"}
            />
            <ClassTime
              category={category}
              classType={"fitness"}
              session={"BOXING"}
              caoch={"Rachel Adam"}
            />
            <ClassTime
              category={category}
              classType={"workout"}
              session={"WEIGHT LOOSE"}
              caoch={"RLefew D. Loee"}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Th = ({ className, children, ...props }) => {
  return (
    <th
      className={`${
        className || ""
      } text-base border py-5 bg-blue-gray-900 bg-opacity-50 border-gray-900`}
      {...props}
    >
      {children}
    </th>
  );
};
const ClassTime = ({
  className,
  session,
  caoch,
  category,
  classType,
  disabled = false,
  ...props
}) => {
  const show = category !== "all" && category !== classType && !disabled;
    return (
    <td
      className={`${className || ""} 
      ${
        disabled
          ? "!bg-gray-700 !bg-opacity-30"
          : "hover:bg-orange-500 hover:bg-opacity-90"
      }  
      ${show ? "!bg-gray-700 !bg-opacity-30" : ""}
      w-40 text-center border border-gray-900 transition-all duration-300`}
      {...props}
    >
      {!disabled && (
        <div className={`${show ? " opacity-0" : ""} transition-all duration-500`}>
          <p className="font-oswald text-sm font-bold">{session}</p>
          <p className="opacity-60 text-xs">{caoch}</p>
        </div>
      )}
    </td>
  );
};
const ThRow = ({ className, children, ...props }) => {
  return (
    <td
      className={`${
        className || ""
      } w-32 px-1 py-9 text-center text-xs font-semibold bg-blue-gray-900 bg-opacity-50 border border-gray-900`}
      {...props}
    >
      {children}
    </td>
  );
};

export default Table;
