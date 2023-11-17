import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Link as ScrollLink } from "react-scroll";
import ScrollReveal from "scrollreveal";

export function Menu({ closeMenu }) {
  const { pathname } = useLocation();

  const scrollLinkConfig = {
    spy: true,
    smooth: true,
    offset: -72,
    duration: 500,
    tabIndex: 0,
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "30px",
      duration: 700,
    });

    const selectors = `
      ul,
      li,
      a
    `;

    sr.reveal(selectors);
  }, []);

  return pathname === "/" ? (
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
        <HashLink to="/#games" onClick={() => closeMenu()}>
          Games
        </HashLink>
      </li>
      <li>
        <HashLink to="/#about" onClick={() => closeMenu()}>
          About
        </HashLink>
      </li>
      <li>
        <HashLink to="/#contact" onClick={() => closeMenu()}>
          Contact
        </HashLink>
      </li>
      <li>
        <RouterLink
          to="/news"
          className={pathname === "/news" ? "active" : ""}
          onClick={() => closeMenu()}
        >
          News
        </RouterLink>
      </li>
    </ul>
  );
}
