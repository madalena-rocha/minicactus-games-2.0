import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useScrollEffect } from "../../utils/useScrollEffect";
import { handleLinkClick } from "../../utils/handleLinkClick";
// import { useScrollReveal } from "../../utils/useScrollReveal";

import "./styles.css";

import { Menu } from "../Menu";
import { SocialLinks } from "../SocialLinks";

import minicactusGamesLogo from "../../assets/minicactus-games-logo.png";

import { List, X } from "phosphor-react";

export function Navigation() {
  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { pathname } = useLocation();

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("menu-expanded");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-expanded");
  };

  useScrollEffect(setScrolling);

  // useScrollReveal(`
  //   #navigation .logo,
  //   #navigation ul,
  //   #navigation .button
  // `);

  return (
    <nav id="navigation" className={scrolling ? "scroll" : ""}>
      <div className="wrapper">
        <Link
          className="logo"
          to="/"
          onClick={() => handleLinkClick("/", pathname)}
        >
          <img
            src={minicactusGamesLogo}
            alt="Minicactus Games logo showing a cactus with a hanging control"
          />

          <h3>Minicactus Games</h3>
        </Link>

        <div className="menu">
          <Menu closeMenu={closeMenu} />

          <a
            className="button"
            target="_blank"
            href="https://store.steampowered.com/developer/minicactusgames"
            rel="noreferrer"
          >
            Follow The Steam Page
          </a>

          <SocialLinks />
        </div>

        <button
          aria-expanded="false"
          aria-label="Abrir menu"
          onClick={openMenu}
          className="open-menu"
        >
          <List size={29} color="#ffffff" />
        </button>

        <button
          aria-expanded="true"
          aria-label="Fechar menu"
          onClick={closeMenu}
          className="close-menu"
        >
          <X size={35} color="#ffffff" />
        </button>
      </div>
    </nav>
  );
}
