import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
  List,
  X,
} from "phosphor-react";

import minicactusGamesLogo from "../assets/minicactus-games-logo.png";

import "./Navigation.css";

export function Navigation({ menuClass, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("menu-expanded");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-expanded");
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navigation" className={scrolling ? "scroll" : ""}>
      <div className={`wrapper ${isMenuOpen ? "menu-expanded" : ""}`}>
        <Link className="logo" to="/">
          <img
            src={minicactusGamesLogo}
            alt="Minicactus Games logo showing a cactus with a hanging control"
          />

          <h3>Minicactus Games</h3>
        </Link>

        <div className={menuClass ? `menu ${menuClass}` : "menu"}>
          {children}

          <a
            className="button"
            target="_blank"
            href="https://store.steampowered.com/developer/minicactusgames"
            rel="noreferrer"
          >
            Follow The Steam Page
          </a>

          <ul className="social-links">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/minicactusgames/"
                rel="noreferrer"
              >
                <InstagramLogo size={24} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/minicactusgames"
                rel="noreferrer"
              >
                <FacebookLogo size={24} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCPaNusJeoBWGPwrD-MCBYrw/featured"
                rel="noreferrer"
              >
                <YoutubeLogo size={24} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://twitter.com/minicactusgames"
                rel="noreferrer"
              >
                <TwitterLogo size={24} />
              </a>
            </li>
          </ul>
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
