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
    window.onload = window.onresize = checkSize;
    return () => {
      document.onload = document.onresize = () => {};
    };
  }, []);
  return breaked;
};

export default useBelowMaxPoint;
