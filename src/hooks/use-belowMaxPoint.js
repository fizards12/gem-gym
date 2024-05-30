import { useCallback, useEffect, useState } from "react";

const useBelowMaxPoint = (breakPoint) => {
  const [breaked, setIsBreaked] = useState(window.innerWidth < +breakPoint);
  const checkSize = useCallback(() => {
    const currentWidth = +window.innerWidth;
    if (breakPoint && !isNaN(+breakPoint) && currentWidth < (+breakPoint)) {
      setIsBreaked(true);
    } else {
      setIsBreaked(false);
    }
  },[]);
  useEffect(() => {
    window.addEventListener("resize",checkSize);
    return () => {
      window.removeEventListener("resize",checkSize);
    };
  }, [checkSize]);
  return breaked;
};

export default useBelowMaxPoint;
