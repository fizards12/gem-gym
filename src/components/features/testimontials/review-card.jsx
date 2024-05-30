import { Avatar, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { FaStar, FaStarHalf } from "react-icons/fa";


const rateToStars = (rate)=>{
    const result = [];
    const rateArr = rate.toString().split(".");
    const deciaml = (+rateArr[1]).toFixed(2);
    const int = +rateArr[0];
    for(let i = 0;i<int;i++){
        result.push(FaStar);
    }
    if(deciaml >= 0.5){
        result.push(FaStarHalf);
    }
    return result;
}

function Review({ className, img, name,children,rate }) {
    const starArr = rateToStars(rate);
    return (
      <Card shadow={false} color="transparent" className={`${className || ""} w-full h-full items-center`}>
        <CardHeader shadow={false} color="transparent" className="mt-0">
            <Avatar src={img} alt={name} size="xxl" />
        </CardHeader>
        <CardBody className="flex flex-col items-center gap-2">
            <p className="font-semibold max-sm:text-sm text-center text-gray-500">{children}</p>
            <h3 className="text-lg max-md:text-base font-bold font-oswald text-white uppercase">{name}</h3>
            <div className="flex gap-1">
                {starArr.length > 0 && starArr.map((Icon,i)=>(
                    <Icon className="text-yellow-900" key={i} />
                ))}
            </div>
        </CardBody>
      </Card>
    );
  }
  
  export default Review;
  