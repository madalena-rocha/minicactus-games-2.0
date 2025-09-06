import { useScrollReveal } from "../../utils/useScrollReveal";

import "./styles.css";

import { Navigation } from "../../components/Navigation";
import { Section } from "../../components/Section";
import { Game } from "../../components/Game";
import { Footer } from "../../components/Footer";
import { BackToTopBtn } from "../../components/BackToTopBtn";

import { v4 as uuidv4 } from "uuid";

import aokaki from "../../../src/assets/aokaki.jpg";

const gameData = {
  id: uuidv4(),
  src: aokaki,
  alt: "A ronin with his sword fighting against a giant centipede.",
  title: "AOKAKI",
  description: [
    {
      id: uuidv4(),
      text: "AOKAKI is a fast-paced 2D platformer where you play as an isopod ronin. Explore fun and challenging levels while battling against the forces of the evil Shogun in this bug inhabited pixelart world.",
    },
  ],
  links: [
    {
      type: "steam",
      href: "https://store.steampowered.com/app/2925520/AOKAKI/",
    },
  ],
};

export function Aokaki() {
  useScrollReveal(`
    #games .card,
    #games .card h3,
    #games .card p,
    #games .button,
  `);

  return (
    <>
      <Navigation />

      <Section id="aokaki" title={<span>Aokaki</span>}>
        <Game
          key={gameData.id}
          src={gameData.src}
          alt={gameData.alt}
          title={gameData.title}
          description={gameData.description}
          links={gameData.links}
        />
      </Section>

      <Footer />

      <BackToTopBtn to="aokaki" />
    </>
  );
}
