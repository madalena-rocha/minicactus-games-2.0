import React from "react";

import { SteamBtn } from "../components/SteamBtn";
import { EpicGamesBtn } from "../components/EpicGamesBtn";
import { NintendoSwitchBtn } from "../components/NintendoSwitchBtn";
import { PS4Btn } from "../components/PS4Btn";
import { XboxOneBtn } from "../components/XboxOneBtn";
import { AirConsoleBtn } from "../components/AirConsoleBtn";

const buttonComponents = {
  steam: SteamBtn,
  epicGames: EpicGamesBtn,
  nintendoSwitch: NintendoSwitchBtn,
  ps4: PS4Btn,
  xboxOne: XboxOneBtn,
  airConsole: AirConsoleBtn,
};

export function Game({ src, alt, title, description, links }) {
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>
        {description.map((item) => (
          <React.Fragment key={item.id}>{item.text}</React.Fragment>
        ))}
      </p>

      <div className="button-container">
        {links.map(({ type, href }, index) => {
          const BtnComponent = buttonComponents[type];
          if (!BtnComponent) return null;
          return <BtnComponent key={index} href={href} />;
        })}
      </div>
    </div>
  );
}
