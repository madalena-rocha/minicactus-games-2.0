import { useEffect } from "react";

export const useScrollEffect = (callback, threshold = 0) => {
  useEffect(() => {
    const handleScroll = () => {
      callback(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback, threshold]);
};
