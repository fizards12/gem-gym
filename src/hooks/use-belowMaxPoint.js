import { useEffect, useState } from "react";

const useBelowMaxPoint = (breakPoint) => {
  const [breaked, setIsBreaked] = useState(true);
  useEffect(() => {
    const checkSize = () => {
      const currentWidth = +window.innerWidth;
      if (breakPoint && !isNaN(+breakPoint) && currentWidth < (+breakPoint)) {
        setIsBreaked(true);
      } else {
        setIsBreaked(false);
      }
    };
    window.addEventListener("resize",checkSize);
    window.addEventListener("load",checkSize);
    return () => {
      window.removeEventListener("resize",checkSize);
      window.removeEventListener("load",checkSize);
    };
  }, []);
  return breaked;
};

export default useBelowMaxPoint;
