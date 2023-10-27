/* eslint-disable */

import "./Navigation.css";

import minicactusGamesLogo from "../assets/minicactus-games-logo.png";

import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
  List,
  X,
} from "phosphor-react";

export function Navigation({ href, menuClass, children }) {
  const menuClassName = menuClass ? `menu ${menuClass}` : "menu";

  return (
    <nav id="navigation">
      <div className="wrapper">
        <a className="logo" href={href}>
          <img
            src={minicactusGamesLogo}
            alt="Minicactus Games logo showing a cactus with a hanging control"
          />

          <h3>Minicactus Games</h3>
        </a>

        <div className={menuClassName}>
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
          onClick="openMenu()"
          className="open-menu"
        >
          <List size={24} />
        </button>

        <button
          aria-expanded="true"
          aria-label="Fechar menu"
          onClick="closeMenu()"
          className="close-menu"
        >
          <X size={24} />
        </button>
      </div>
    </nav>
  );
}
