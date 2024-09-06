import "./styles.css";

import {
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  TwitterLogo,
  Butterfly,
} from "phosphor-react";

export function SocialLinks() {
  return (
    <ul className="social-links">
      <li>
        <a
          target="_blank"
          href="https://www.instagram.com/minicactusgames/"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <InstagramLogo size={24} />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://www.facebook.com/minicactusgames"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FacebookLogo size={24} />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCPaNusJeoBWGPwrD-MCBYrw/featured"
          rel="noreferrer"
          aria-label="Youtube"
        >
          <YoutubeLogo size={24} />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://twitter.com/minicactusgames"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <TwitterLogo size={24} />
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://bsky.app/profile/minicactusgames.com"
          rel="noreferrer"
          aria-label="Bluesky"
        >
          <Butterfly size={24} />
        </a>
      </li>
    </ul>
  );
}
