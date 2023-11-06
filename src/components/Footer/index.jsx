import { Link, useLocation } from "react-router-dom";

import "./styles.css";

import { SocialLinks } from "../SocialLinks";

import minicactusGamesLogo from "../../assets/minicactus-games-logo.png";

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
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
