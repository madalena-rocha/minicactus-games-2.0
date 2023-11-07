import { Link as RouterLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link as ScrollLink } from "react-scroll";

export function Menu({ closeMenu }) {
  const location = useLocation();

  const scrollLinkConfig = {
    spy: true,
    smooth: true,
    offset: -72,
    duration: 500,
    tabIndex: 0,
  };

  return location.pathname === "/" ? (
    <ul>
      <li>
        <ScrollLink
          to="games"
          {...scrollLinkConfig}
          onClick={() => closeMenu()}
        >
          Games
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          {...scrollLinkConfig}
          onClick={() => closeMenu()}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contact"
          {...scrollLinkConfig}
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
  ) : (
    <ul>
      <li>
        <HashLink
          to="/#games"
          onClick={() => closeMenu()}
        >
          Games
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/#about"
          onClick={() => closeMenu()}
        >
          About
        </HashLink>
      </li>
      <li>
        <HashLink
          to="/#contact"
          onClick={() => closeMenu()}
        >
          Contact
        </HashLink>
      </li>
      <li>
        <RouterLink
          to="/news"
          className={location.pathname === "/news" ? "active" : ""}
          onClick={() => closeMenu()}
        >
          News
        </RouterLink>
      </li>
    </ul>
  );
}
