/* eslint-disable */

import "./App.css";

import { SteamBtn } from "../components/SteamBtn";
import { EpicGamesBtn } from "../components/EpicGamesBtn";
import { NintendoSwitchBtn } from "../components/NintendoSwitchBtn";
import { PS4Btn } from "../components/PS4Btn";
import { XboxOneBtn } from "../components/XboxOneBtn";
import { AirConsoleBtn } from "../components/AirConsoleBtn";
import { Navigation } from "../components/Navigation";
import { Section } from "../components/Section";
import { Game } from "../components/Game";
import { Footer } from "../components/Footer";
import { BackToTopBtn } from "../components/BackToTopBtn";

import { v4 as uuidv4 } from "uuid";

import chaseSurvivors from "../../src/assets/chase-survivors.png";
import roadDefense from "../../src/assets/road-defense.png";
import underland from "../../src/assets/underland.png";
import underlandTheClimb from "../../src/assets/underland-the-climb.png";
import unlockTheCat from "../../src/assets/unlock-the-cat.png";
import catSlideTiles from "../../src/assets/cat-slide-tiles.png";
import noCatFightsHere from "../../src/assets/no-cat-fights-here.png";
import theVillagerAndTheWerewolf from "../../src/assets/the-villager-and-the-werewolf.png";
import jigsawBestiary from "../../src/assets/jigsaw-bestiary.jpg";
import miningCats from "../../src/assets/mining-cats.png";
import farmKittenPuzzlePipes from "../../src/assets/farm-kitten-puzzle-pipes.png";
import giveMeMorePills from "../../src/assets/give-me-more-pills.png";
import lostAstronaut from "../../src/assets/lost-astronaut.png";
import ludo from "../../src/assets/ludo.png";

import { MapPin, EnvelopeSimple, DiscordLogo } from "phosphor-react";

export function App() {
  const gamesData = [
    {
      id: uuidv4(),
      src: chaseSurvivors,
      alt: "Four characters surrounded by zombies.",
      title: "Chase Survivors",
      description:
        "Survive the apocalypse! In 'Chase Survivors,' evolve your character and weapons to face hordes of gruesome creatures. Are you ready?",
      links: [
        <SteamBtn href="https://store.steampowered.com/app/2195010/Chase_Survivors/" />,
      ],
    },
    {
      id: uuidv4(),
      src: roadDefense,
      alt: "Character pointing a gun at the vehicle that is passing on the road.",
      title: "Road Defense",
      description:
        "Protect the cars on the road! You can approach the defense towers and equip them with various weapons to help you in the task. The hordes of criminals trying to destroy the cars get bigger and bigger as the level progresses.",
      links: [
        <EpicGamesBtn href="https://store.epicgames.com/en-US/p/road-defense-outsiders-22e4ba" />,
        <SteamBtn href="https://store.steampowered.com/agecheck/app/1973320/Road_Defense_Outsiders/" />,
      ],
    },
    {
      id: uuidv4(),
      src: underland,
      alt: "Character in front of an excavation containing building elements and an apocalyptic city in the background.",
      title: "Underland",
      description:
        "Use the elements at your disposal, such as excavators, pumps, plumbing, among others, to drill the soil to the indicated location. The dynamic scenario, fluid mechanics and the laws of physics must be manipulated correctly to achieve the goal. Find the city of Underland!",
      links: [
        <NintendoSwitchBtn href="https://www.qubyteinteractive.com/games/underland/" />,
        <PS4Btn href="https://store.playstation.com/pt-br/product/UP2158-CUSA29609_00-3707429945542009/" />,
        <XboxOneBtn href="https://www.xbox.com/en-us/games/store/underland/9nl82ph84j87?activetab=pivot:overviewtab" />,
        <SteamBtn href="https://store.steampowered.com/app/1528050/Underland/" />,
      ],
    },
    {
      id: uuidv4(),
      src: underlandTheClimb,
      alt: "Underground excavation containing character, building elements and extraterrestrial monsters.",
      title: "Underland: The Climb",
      description:
        "The city of Underland was attacked by extraterrestrial creatures. The invaders issued a signal and now many of them are in the city. Help Ivy survive as she escapes to the Earth's surface. On her journey she must use various tools intelligently to be able to dig the ground, avoid acid and go through very strange constructions.",
      links: [
        <NintendoSwitchBtn href="https://www.qubyteinteractive.com/games/underland-theclimb/#contact" />,
        <PS4Btn href="https://store.playstation.com/pt-br/concept/10005086" />,
        <XboxOneBtn href="https://www.xbox.com/en-us/games/store/underland-the-climb/9n7rvqlgjrg2" />,
        <SteamBtn href="https://store.steampowered.com/app/1592340/Underland_The_Climb/" />,
      ],
    },
    {
      id: uuidv4(),
      src: unlockTheCat,
      alt: "Cat trapped in a pen with stone blocks blocking the way out.",
      title: "Unlock The Cat",
      description:
        "Kitty is unable to reach her destination due to some rocks in her path. He could jump over the rocks, but he just doesn't want to do that, as he claims to be very tiring. So it's up to you to carry out the heavy labor for the comfort of this little kitten.",
      links: [
        <NintendoSwitchBtn href="https://www.qubyteinteractive.com/games/unlock-the-cat/" />,
        <SteamBtn href="https://store.steampowered.com/app/1554550/Unlock_The_Cat/" />,
      ],
    },
    {
      id: uuidv4(),
      src: catSlideTiles,
      alt: "Cat in front of a puzzle scenario with the path blocked by objects.",
      title: "Cat Slide Tiles",
      description:
        "Move the sliding tiles to unblock a path for the kitten to walk to the exit.",
      links: [
        <NintendoSwitchBtn href="https://www.qubyteinteractive.com/games/Cat-Slide-Tiles/" />,
        <SteamBtn href="https://store.steampowered.com/app/1646030/Cat_Slide_Tiles/" />,
        <XboxOneBtn href="https://www.xbox.com/en-US/games/store/cat-slide-tiles/9nk1v931w0mp" />,
        <PS4Btn href="https://store.playstation.com/en-us/product/UP7958-CUSA39444_00-CATSLIDETILPS4NA/" />,
      ],
    },
    {
      id: uuidv4(),
      src: noCatFightsHere,
      alt: "Happy cats jumping on the roof of city buildings.",
      title: "No Cat Fights Here!",
      description:
        "Let's avoid catfights on the roof? Draw a path for each cat to follow and keep them from bumping into each other along the way.",
      links: [
        <SteamBtn href="https://store.steampowered.com/app/1942540/No_Cat_Fights_Here/" />,
      ],
    },
    {
      id: uuidv4(),
      src: theVillagerAndTheWerewolf,
      alt: "Werewolf with glowing eyes and open mouth showing teeth.",
      title: "The Villager and the Werewolf - A jigsaw puzzle tale",
      description: [
        <>
          In this game, when you fit the last piece of each jigsaw, you will
          hear a fantastic werewolf story written by Marta Machado{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/marta.machado.rocha/"
            rel="noreferrer"
          >
            (@marta.machado.rocha)
          </a>
          and illustrated by Alexandre Rocha{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/semdizer/"
            rel="noreferrer"
          >
            (@semdizer)
          </a>
          .
        </>,
      ],
      links: [
        <SteamBtn href="https://store.steampowered.com/agecheck/app/2157100/" />,
      ],
    },
    {
      id: uuidv4(),
      src: jigsawBestiary,
      alt: "Partially assembled jigsaw puzzle showing Quibungo devouring its victims.",
      title: "Jigsaw Bestiary",
      description: [
        <>
          Let's put the pieces together and meet amazing creatures. Here, the
          true mythologies behind the monsters are explained after solving each
          jigsaw. The beasts were illustrated by Alexandre Rocha{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/semdizer/"
            rel="noreferrer"
          >
            (@semdizer)
          </a>{" "}
          in his unique artistic style.
        </>,
      ],
      links: [
        <SteamBtn href="https://store.steampowered.com/app/1889650/Jigsaw_Bestiary/" />,
      ],
    },
    {
      id: uuidv4(),
      src: miningCats,
      alt: "Three cute cats in front of a mine.",
      title: "Mining Cats",
      description:
        "Mining Cats is a type of logic puzzle that involves blasting rocks and creating paths that connect mines of gemstones of the same color.",
      links: [
        <SteamBtn href="https://store.steampowered.com/app/1837920/Mining_Cats/" />,
      ],
    },
    {
      id: uuidv4(),
      src: farmKittenPuzzlePipes,
      alt: "Farm with exposed underground irrigation pipeline.",
      title: "Farm Kitten - Puzzle Pipes",
      description:
        "Help the kitten rotate the pipes to bring water to his farm. The more the kitten plants, the more money he has to fulfill his dreams as a cat.",
      links: [
        <SteamBtn href="https://store.steampowered.com/app/1721270/Farm_Kitten__Puzzle_Pipes/" />,
      ],
    },
    {
      id: uuidv4(),
      src: giveMeMorePills,
      alt: "Car jumping off a ramp and running over character, with pills flying across the screen.",
      title: "Give Me More Pills",
      description:
        "Set up a schedule for your character to take pills at the right time and in the right order. The side effects of the pills make him jump, walk, run. Then press Play. The character starts performing the action that each pill causes at the exact time he takes it. Reach the highlighted area. Survive!",
      links: [
        <SteamBtn href="https://store.steampowered.com/agecheck/app/1752610/" />,
      ],
    },
    {
      id: uuidv4(),
      src: lostAstronaut,
      alt: "Rocket taking off leaving a trail of smoke behind.",
      title: "Lost Astronaut",
      description:
        "Control a spaceship and attempts to land safely on blue platforms. You can move the ship and burn fuel to fire a thruster, attempting to gently land on marked areas. A new scenario is loaded after every successful landing.",
      links: [
        <SteamBtn href="https://store.steampowered.com/app/1481140/Lost_Astronaut/" />,
      ],
    },
    {
      id: uuidv4(),
      src: ludo,
      alt: "Ludo board with dice thrown on the screen.",
      title: "Ludo",
      description:
        "Ludo is a strategy board game, in which the players race their four piece from start to finish according to the rolls of a single die. Ludo is derived from the Indian game Pachisi, but simpler. The game and its variations are popular in many countries and under various names.",
      links: [<AirConsoleBtn href="https://www.airconsole.com/play/ludo" />],
    },
  ];

  return (
    <>
      <Navigation href="#games">
        <ul>
          <li>
            <a onClick="closeMenu()" href="#games">
              Games
            </a>
          </li>
          <li>
            <a onClick="closeMenu()" href="#news">
              News
            </a>
          </li>
          <li>
            <a onClick="closeMenu()" href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick="closeMenu()" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </Navigation>

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
            >
              {game.links}
            </Game>
          ))}
        </div>
      </Section>

      <Section id="about" title="About">
        <p>
          Minicactus Games is an independent game studio based in Brazil.
          Founded in 2021 by Cleiton Machado
          <a
            target="_blank"
            href="https://twitter.com/clayton_axel"
            rel="noreferrer"
          >
            (@clayton_axel)
          </a>
          , Minicactus Games has been developing games of the most diverse
          genres, with more than 10 titles released so far. We are present on
          Steam, Playstation, Xbox, Nintendo Switch and Airconsole, with the
          expectation of growing more and more in the video game industry.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <ul>
          <li>
            <MapPin size={24} />
            R. Bispo Renato Conceição da Cunha, 384 - Lauro de Freitas, Bahia,
            Brazil - 42703-080
          </li>

          <li>
            <EnvelopeSimple size={24} />
            contact@minicactusgames.com
          </li>

          <li>
            <EnvelopeSimple size={24} />
            minicactusgames@outlook.com
          </li>
        </ul>

        <a
          className="button"
          target="_blank"
          href="http://discordapp.com/users/443424863663947778"
          rel="noreferrer"
        >
          <DiscordLogo size={24} />
          Discord
        </a>
      </Section>

      <Footer href="#games">
        <a href="/news" target="_blank">
          News
        </a>
        <a href="/privacy-policy" target="_blank">
          Privacy Policy
        </a>
      </Footer>

      <BackToTopBtn href="#games" />
    </>
  );
}
