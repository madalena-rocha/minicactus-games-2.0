import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ScrollReveal from "scrollreveal";

import "./styles.css";

import { SocialLinks } from "../SocialLinks";

import minicactusGamesLogo from "../../assets/minicactus-games-logo.png";

export function Footer() {
  const { pathname } = useLocation();

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
      footer p,
      footer ul,
      footer li
    `;

    sr.reveal(selectors);
  }, []);

  return (
    <footer>
      <div className="wrapper">
        <div className="col-a">
          <Link className="logo" to="/" onClick={() => handleLinkClick("/")}>
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
              onClick={() => handleLinkClick("/privacy-policy")}
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
