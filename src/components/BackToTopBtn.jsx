/* eslint-disable */

import "./BackToTopBtn.css";

import { ArrowCircleUp } from "phosphor-react";

export function BackToTopBtn({ href }) {
  return (
    <a id="backToTopButton" href={href}>
      <ArrowCircleUp size={40} />
    </a>
  );
}
