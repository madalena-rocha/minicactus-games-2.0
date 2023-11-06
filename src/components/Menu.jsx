import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export function Menu({ closeMenu }) {
  const location = useLocation();

  const scrollLinkConfig = {
    spy: true,
    smooth: true,
    offset: -72,
    duration: 500,
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
        <RouterLink to="/" onClick={() => closeMenu()}>
          Games
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" onClick={() => closeMenu()}>
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" onClick={() => closeMenu()}>
          Contact
        </RouterLink>
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
