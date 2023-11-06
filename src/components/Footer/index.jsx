import { Link, useLocation } from "react-router-dom";

import "./styles.css";

import minicactusGamesLogo from "../../assets/minicactus-games-logo.png";

import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
} from "phosphor-react";

export function Footer() {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  };

  const handlePrivacyPolicyClick = () => {
    if (location.pathname === "/privacy-policy") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="col-a">
          <Link className="logo" to="/" onClick={handleLogoClick}>
            <img
              src={minicactusGamesLogo}
              alt="Minicactus Games logo showing a cactus with a hanging control"
            />
          </Link>

          <p>©2023 Minicactus Games </p>
          <p>CNPJ: 41.604.427/0001-86 </p>

          <Link to="/privacy-policy" onClick={handlePrivacyPolicyClick}>
            Privacy Policy
          </Link>
        </div>

        <div className="col-b">
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
      </div>
    </footer>
  );
}
