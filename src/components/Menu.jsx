import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./Menu.css";

export function Menu() {
  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-expanded");
  };

  return (
    <ul>
      <li>
        <ScrollLink
          to="games"
          spy={true}
          smooth={true}
          offset={-72}
          duration={500}
          onClick={() => closeMenu()}
        >
          Games
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-72}
          duration={500}
          onClick={() => closeMenu()}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-72}
          duration={500}
          onClick={() => closeMenu()}
        >
          Contact
        </ScrollLink>
      </li>
      <li>
        <RouterLink to="/news" onClick={() => closeMenu()}>
          News
        </RouterLink>
      </li>
    </ul>
  );
}
