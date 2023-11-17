import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import "./styles.css";

import { Menu } from "../Menu";
import { SocialLinks } from "../SocialLinks";

import minicactusGamesLogo from "../../assets/minicactus-games-logo.png";

import { List, X } from "phosphor-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-expanded");
  };

  useEffect(() => {
    function handleScroll() {
      setScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (path) => {
    if (pathname === path) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "30px",
      duration: 700,
    });

    const selectors = `
      #navigation .logo,
      #navigation ul,
      #navigation .button
    `;

    sr.reveal(selectors);
  }, []);

  return (
    <nav id="navigation" className={scrolling ? "scroll" : ""}>
      <div className="wrapper">
        <Link className="logo" to="/" onClick={() => handleLinkClick("/")}>
          <img
            src={minicactusGamesLogo}
            alt="Minicactus Games logo showing a cactus with a hanging control"
          />

          <h3>Minicactus Games</h3>
        </Link>

        <div className="menu">
          <Menu closeMenu={toggleMenu} />

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
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={toggleMenu}
          className={isMenuOpen ? "close-menu" : "open-menu"}
        >
          {isMenuOpen ? (
            <X size={35} color="#ffffff" />
          ) : (
            <List size={29} color="#ffffff" />
          )}
        </button>
      </div>
    </nav>
  );
}
