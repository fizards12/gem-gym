import {motion} from "framer-motion"



function GalleryImage({className,img,...props}) {
  return (
    <motion.div 
    style={{backgroundImage:`url(${img})`,height: "472px"}} 
    className={`${className} hover:scale-105 transition-transform duration-500 rounded-md m-1 row-span-1  bg-cover bg-center-top`} {...props}/>
  )
}

export default GalleryImage