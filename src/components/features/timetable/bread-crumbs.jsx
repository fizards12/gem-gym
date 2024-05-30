import { Breadcrumbs, ThemeProvider } from "@material-tailwind/react";
const theme = {
  breadcrumbs:{
    styles:{
      base:{
        root:{
          initial:{
            width: "w-fit",
          }
        }
      }
    }
  }
}
function TableBreadCrumbs({ onClick, category, ...props }) {
  return (
    <ThemeProvider value={theme}>
      <Breadcrumbs
        separator={"/"}
        className="bg-black rounded-sm py-5"
        {...props}
      >
        <ClassLink href="all" category={category} onClick={onClick}>
          All events
        </ClassLink>
        <ClassLink href="fitness" category={category} onClick={onClick}>
          Fitness tips
        </ClassLink>
        <ClassLink href="motivation" category={category} onClick={onClick}>
          Motivation
        </ClassLink>
        <ClassLink href="workout" category={category} onClick={onClick}>
          Workout
        </ClassLink>
      </Breadcrumbs>
    </ThemeProvider>
  );
}

const ClassLink = ({ category, children, onClick, href, ...props }) => {
  return (
    <a
      href={href}
      className={`text-white hover:text-orange-400 max-sm:text-xs transition-colors px-3 ${
        category === href ? "!text-deep-orange-400" : ""
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default TableBreadCrumbs;
