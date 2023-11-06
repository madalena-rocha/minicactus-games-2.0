import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./styles.css";

import { ArrowCircleUp } from "phosphor-react";

export function BackToTopBtn({ to }) {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const backToTopButton = document.getElementById("backToTopButton");

      if (window.scrollY > 550) {
        setShowBackToTopBtn(true);

        if (backToTopButton) {
          backToTopButton.classList.add("show");
        }
      } else {
        setShowBackToTopBtn(false);

        if (backToTopButton) {
          backToTopButton.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showBackToTopBtn && (
      <Link
        id="backToTopButton"
        to={to}
        spy={true}
        smooth={true}
        offset={-72}
        duration={500}
        aria-label="Back to top"
        tabIndex="0"
      >
        <ArrowCircleUp size={53} weight="thin" />
      </Link>
    )
  );
}
