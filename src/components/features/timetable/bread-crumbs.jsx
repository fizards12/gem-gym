import { Breadcrumbs } from '@material-tailwind/react'

function TableBreadCrumbs({onClick,category,...props}) {
  return (
    <Breadcrumbs separator={"/"} className="bg-black rounded-sm py-5" {...props}>
          <ClassLink href="all" category={category} onClick={onClick}>
            All events
          </ClassLink>
          <ClassLink href="fitness" category={category} onClick={onClick}>
            Fitness tips
          </ClassLink>
          <ClassLink
            href="motivation"
            category={category}
            onClick={onClick}
          >
            Motivation
          </ClassLink>
          <ClassLink href="workout" category={category} onClick={onClick}>
            Workout
          </ClassLink>
        </Breadcrumbs>
  )
}

const ClassLink = ({ category, children, onClick, href, ...props }) => {
    return (
      <a
        href={href}
        className={`text-white hover:text-orange-400 transition-colors px-3 ${
          category === href ? "!text-deep-orange-400" : ""
        }`}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  };
  

export default TableBreadCrumbs