import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ScrollReveal from "scrollreveal";

import "./styles.css";

import { Navigation } from "../../components/Navigation";
import { Section } from "../../components/Section";
import { New } from "../../components/New";
import { Footer } from "../../components/Footer";
import { BackToTopBtn } from "../../components/BackToTopBtn";

import gamesPark from "../../../src/assets/games-park.png";
import freeAppsForMe from "../../../src/assets/freeappsforme.png";
import gamesKeys from "../../../src/assets/games-keys.png";
import eurogamer from "../../../src/assets/eurogamer.png";
import pcGamer from "../../../src/assets/pc-gamer.png";

export function News() {
  const newsData = [
    {
      id: uuidv4(),
      src: gamesPark,
      alt: "Gamespark written in blue on a white background, with the letter s in the shape of a lightning bolt.",
      href: "https://www.gamespark.jp/article/2023/05/30/130456.html",
      details: "Published: 29th May 2023",
      title:
        "Article written for RIKUSYO, by GameSpark, about the release of Road Defense: Outsiders",
    },
    {
      id: uuidv4(),
      src: freeAppsForMe,
      alt: "Smarthphone showing various apps and the name freeappsforme diagonally",
      href: "https://freeappsforme.com/horror-puzzle-games/?fbclid=IwAR0IXgQngKvuIC9NsC46ddj_eWnFRK_p7syj6Fb-r9wDaw1DcKFfIWqYnO8",
      details: "Published: 4th November 2022",
      title: "6 Best Horror Puzzle Games for Android & iOS",
    },
    {
      id: uuidv4(),
      src: gamesKeys,
      alt: "GamesKeys written in white with the letter k in orange on a black background.",
      href: "https://gameskeys.net/top-steam-games-to-tryout-in-april-2022/",
      details: "Published: 12th April 2022",
      title: "No Cat Fights Here: Top Steam Games to Tryout In April 2022",
    },
    {
      id: uuidv4(),
      src: eurogamer,
      alt: "Eurogamer capitalized in blue on a light background, with the image of a globe on the right.",
      href: "https://www.eurogamer.net/underland-is-a-fascinating-game-about-drilling-and-blowing-things-up",
      details: "Published: 8th November 2021",
      title:
        "Underland is a fascinating game about drilling and blowing things up",
    },
    {
      id: uuidv4(),
      src: gamesPark,
      alt: "Gamespark written in blue on a white background, with the letter s in the shape of a lightning bolt.",
      href: "https://www.gamespark.jp/article/2021/06/13/109505.html",
      details: "Published: 12th June 2021",
      title: "Cat Slide Tiles: Interview with developer [Japanese]",
    },
    {
      id: uuidv4(),
      src: gamesKeys,
      alt: "GamesKeys written in white with the letter k in orange on a black background.",
      href: "https://gameskeys.net/top-steam-games-to-tryout-in-june-2021/",
      details: "Published: 12th June 2021",
      title: "Cat Slide Tiles: Top Steam Games To Tryout In June 2021",
    },
    {
      id: uuidv4(),
      src: pcGamer,
      alt: "Pc Gamer written in white capital letters on a dark background, with the letters PC on a red background.",
      href: "https://www.pcgamer.com/five-new-steam-games-you-probably-missed-april-26-2021/",
      details: "Published: 26th April 2021",
      title: "Underland: The Climb. Five new Steam games you probably missed",
    },
  ];

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "30px",
      duration: 700,
    });

    const selectors = `
      .cards, 
      .card,
      h3, 
      a, 
      p
    `;

    sr.reveal(selectors), { interval: 200 };
  }, []);

  return (
    <>
      <Navigation />

      <Section id="news" title="News">
        <div className="cards">
          {newsData.map((notice) => (
            <New
              key={notice.id}
              src={notice.src}
              alt={notice.alt}
              href={notice.href}
              details={notice.details}
              title={notice.title}
            >
              {notice.links}
            </New>
          ))}
        </div>
      </Section>

      <Footer />

      <BackToTopBtn to="news" />
    </>
  );
}
