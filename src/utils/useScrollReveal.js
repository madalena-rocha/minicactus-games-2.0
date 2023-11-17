import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = (selectors) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "30px",
      duration: 700,
    });

    sr.reveal(selectors);
  }, [selectors]);
};