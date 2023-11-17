import { Link, useLocation } from "react-router-dom";

import { handleLinkClick } from "../../utils/handleLinkClick";
import { useScrollReveal } from "../../utils/useScrollReveal";

import "./styles.css";

import { SocialLinks } from "../SocialLinks";

import minicactusGamesLogo from "../../assets/minicactus-games-logo.png";

export function Footer() {
  const { pathname } = useLocation();

  useScrollReveal(`
    footer p,
    footer ul,
    footer li
  `);

  return (
    <footer>
      <div className="wrapper">
        <div className="col-a">
          <Link
            className="logo"
            to="/"
            onClick={() => handleLinkClick("/", pathname)}
          >
            <img
              src={minicactusGamesLogo}
              alt="Minicactus Games logo showing a cactus with a hanging control"
            />
          </Link>

          <p>©{new Date().getFullYear()} Minicactus Games </p>
          <p>CNPJ: 41.604.427/0001-86 </p>

          <p>
            <Link
              to="/privacy-policy"
              onClick={() => handleLinkClick("/privacy-policy", pathname)}
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="col-b">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
