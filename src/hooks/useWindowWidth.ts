import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // return a fn. React calls the fn returned from useEffect on component unmount;
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
