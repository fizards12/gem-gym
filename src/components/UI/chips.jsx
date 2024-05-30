export default function PopularTags({ className, children }) {
  return (
    <div
      className={`${className} 
          flex flex-wrap gap-2 
          *:px-4 *:py-2 
          *:bg-black *:bg-opacity-35 
          *:text-gray-400 text-sm`}
    >
      {children}
    </div>
  );
}
