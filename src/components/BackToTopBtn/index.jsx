import { useState } from "react";
import { Link } from "react-scroll";

import { useScrollEffect } from "../../utils/useScrollEffect";

import "./styles.css";

import { ArrowCircleUp } from "phosphor-react";

export function BackToTopBtn({ to }) {
  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  useScrollEffect(setShowBackToTopBtn, 550);

  return (
    <Link
      className={`backToTopButton ${showBackToTopBtn ? "show" : ""}`}
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
  );
}
