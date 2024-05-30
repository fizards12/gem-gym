import { useCallback, useEffect, useState } from "react";

const useBelowMaxPoint = (breakPoint) => {
  const [breaked, setIsBreaked] = useState(true);
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
    window.addEventListener("load",checkSize);
    return () => {
      window.removeEventListener("resize",checkSize);
      document.removeEventListener("load",checkSize);
    };
  }, [checkSize]);
  return breaked;
};

export default useBelowMaxPoint;
