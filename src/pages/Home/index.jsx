import { Element } from "react-scroll";

import { useScrollReveal } from "../../utils/useScrollReveal";

import "./styles.css";

import { Navigation } from "../../components/Navigation";
import { Section } from "../../components/Section";
import { Game } from "../../components/Game";
import { Footer } from "../../components/Footer";
import { BackToTopBtn } from "../../components/BackToTopBtn";

import { MapPin, EnvelopeSimple, DiscordLogo } from "phosphor-react";

import gamesData from "../../../src/data/gamesData.jsx";

export function Home() {
  useScrollReveal(`
    #games .cards,
    #games .card,
    #games .card h3,
    #games .card p,
    #games .button,
    #about p,
    #contact ul,
    #contact li,
    #contact .button
  `);

  return (
    <>
      <Navigation />

      <Element name="games">
        <Section
          id="games"
          title={
            <span>
              Game <span>List</span>
            </span>
          }
        >
          <div className="cards">
            {gamesData.map((game) => (
              <Game
                key={game.id}
                src={game.src}
                alt={game.alt}
                title={game.title}
                description={game.description}
                links={game.links}
              />
            ))}
          </div>
        </Section>
      </Element>

      <Element name="about">
        <Section id="about" title="About">
          <p>
            Minicactus Games is an independent game studio based in Brazil.
            Founded in 2021 by Cleiton Machado{" "}
            <a
              target="_blank"
              href="https://bsky.app/profile/cleitoncmachado.bsky.social"
              rel="noreferrer"
            >
              (@cleitoncmachado)
            </a>
            , Minicactus Games has been developing games of the most diverse
            genres, with more than 10 titles released so far. We are present on
            Steam, Playstation, Xbox, Nintendo Switch and Airconsole, with the
            expectation of growing more and more in the video game industry.
          </p>
        </Section>
      </Element>

      <Element name="contact">
        <Section id="contact" title="Contact">
          <ul>
            <li>
              <MapPin size={24} />
              R. Bispo Renato Conceição da Cunha, 384 - Lauro de Freitas, Bahia,
              Brazil - 42703-080
            </li>

            <li>
              <EnvelopeSimple size={24} />
              <a href="mailto:contact@minicactusgames.com">
                contact@minicactusgames.com
              </a>
            </li>

            <li>
              <EnvelopeSimple size={24} />
              <a href="mailto:minicactusgames@outlook.com">
                minicactusgames@outlook.com
              </a>
            </li>
          </ul>

          <a
            className="button"
            target="_blank"
            href="http://discordapp.com/users/443424863663947778"
            rel="noreferrer"
          >
            <DiscordLogo size={28} weight="fill" />
            Discord
          </a>
        </Section>
      </Element>

      <Footer />

      <BackToTopBtn to="games" />
    </>
  );
}
