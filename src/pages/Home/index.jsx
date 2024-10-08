import { Element } from "react-scroll";
import { v4 as uuidv4 } from "uuid";

import { useScrollReveal } from "../../utils/useScrollReveal";

import "./styles.css";

import { SteamBtn } from "../../components/SteamBtn";
import { EpicGamesBtn } from "../../components/EpicGamesBtn";
import { NintendoSwitchBtn } from "../../components/NintendoSwitchBtn";
import { PS4Btn } from "../../components/PS4Btn";
import { XboxOneBtn } from "../../components/XboxOneBtn";
import { AirConsoleBtn } from "../../components/AirConsoleBtn";
import { Navigation } from "../../components/Navigation";
import { Section } from "../../components/Section";
import { Game } from "../../components/Game";
import { Footer } from "../../components/Footer";
import { BackToTopBtn } from "../../components/BackToTopBtn";

import aokaki from "../../../src/assets/aokaki.jpg";
import catsBalance from "../../../src/assets/cats-balance.png";
import outbreakOverlord from "../../../src/assets/outbreak-overlord.jpg";
import chaseSurvivors from "../../../src/assets/chase-survivors.png";
import roadDefense from "../../../src/assets/road-defense.png";
import underland from "../../../src/assets/underland.png";
import underlandTheClimb from "../../../src/assets/underland-the-climb.png";
import unlockTheCat from "../../../src/assets/unlock-the-cat.png";
import catSlideTiles from "../../../src/assets/cat-slide-tiles.png";
import noCatFightsHere from "../../../src/assets/no-cat-fights-here.png";
import theVillagerAndTheWerewolf from "../../../src/assets/the-villager-and-the-werewolf.png";
import jigsawBestiary from "../../../src/assets/jigsaw-bestiary.jpg";
import miningCats from "../../../src/assets/mining-cats.png";
import farmKittenPuzzlePipes from "../../../src/assets/farm-kitten-puzzle-pipes.png";
import giveMeMorePills from "../../../src/assets/give-me-more-pills.png";
import lostAstronaut from "../../../src/assets/lost-astronaut.png";
import ludo from "../../../src/assets/ludo.png";

import { MapPin, EnvelopeSimple, DiscordLogo } from "phosphor-react";

export function Home() {
  const gamesData = [
    {
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
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/2925520/AOKAKI/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: roadDefense,
      alt: "Character pointing a gun at the vehicle that is passing on the road.",
      title: "Road Defense: Outsiders",
      description: [
        {
          id: uuidv4(),
          text: "Protect the cars on the road! You can approach the defense towers and equip them with various weapons to help you in the task. The hordes of criminals trying to destroy the cars get bigger and bigger as the level progresses.",
        },
      ],
      links: [
        <NintendoSwitchBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.nintendo.com/us/store/products/road-defense-outsiders-switch"
        />,
        <PS4Btn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.playstation.com/en-us/concept/10010559"
        />,
        <XboxOneBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.xbox.com/en-us/games/store/road-defense-outsiders/9p19vfjxktgg"
        />,
        <EpicGamesBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.epicgames.com/en-US/p/road-defense-outsiders-22e4ba"
        />,
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/agecheck/app/1973320/Road_Defense_Outsiders/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: outbreakOverlord,
      alt: "A fence with holes in the background, superimposed by the game's logo.",
      title: "Outbreak Overlord",
      description: [
        {
          id: uuidv4(),
          text: "Turn the entire population into zombies before your horde is exterminated. Be strategic in your attacks and become the apocalypse itself.",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/2850890/Outbreak_Overlord/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: underland,
      alt: "Character in front of an excavation containing building elements and an apocalyptic city in the background.",
      title: "Underland",
      description: [
        {
          id: uuidv4(),
          text: "Use the elements at your disposal, such as excavators, pumps, plumbing, among others, to drill the soil to the indicated location. The dynamic scenario, fluid mechanics and the laws of physics must be manipulated correctly to achieve the goal. Find the city of Underland!",
        },
      ],
      links: [
        <NintendoSwitchBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.qubyteinteractive.com/games/underland/"
        />,
        <PS4Btn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.playstation.com/pt-br/product/UP2158-CUSA29609_00-3707429945542009/"
        />,
        <XboxOneBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.xbox.com/en-us/games/store/underland/9nl82ph84j87?activetab=pivot:overviewtab"
        />,
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1528050/Underland/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: underlandTheClimb,
      alt: "Underground excavation containing character, building elements and extraterrestrial monsters.",
      title: "Underland: The Climb",
      description: [
        {
          id: uuidv4(),
          text: "The city of Underland was attacked by extraterrestrial creatures. The invaders issued a signal and now many of them are in the city. Help Ivy survive as she escapes to the Earth's surface. On her journey she must use various tools intelligently to be able to dig the ground, avoid acid and go through very strange constructions.",
        },
      ],
      links: [
        <NintendoSwitchBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.qubyteinteractive.com/games/underland-theclimb/#contact"
        />,
        <PS4Btn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.playstation.com/pt-br/concept/10005086"
        />,
        <XboxOneBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.xbox.com/en-us/games/store/underland-the-climb/9n7rvqlgjrg2"
        />,
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1592340/Underland_The_Climb/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: chaseSurvivors,
      alt: "Four characters surrounded by zombies.",
      title: "Chase Survivors",
      description: [
        {
          id: uuidv4(),
          text: "Survive the apocalypse! In 'Chase Survivors,' evolve your character and weapons to face hordes of gruesome creatures. Are you ready?",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/2195010/Chase_Survivors/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: catSlideTiles,
      alt: "Cat in front of a puzzle scenario with the path blocked by objects.",
      title: "Cat Slide Tiles",
      description: [
        {
          id: uuidv4(),
          text: "Move the sliding tiles to unblock a path for the kitten to walk to the exit.",
        },
      ],
      links: [
        <NintendoSwitchBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.qubyteinteractive.com/games/Cat-Slide-Tiles/"
        />,
        <PS4Btn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.playstation.com/en-us/product/UP7958-CUSA39444_00-CATSLIDETILPS4NA/"
        />,
        <XboxOneBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.xbox.com/en-US/games/store/cat-slide-tiles/9nk1v931w0mp"
        />,
        <EpicGamesBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.epicgames.com/en-US/p/cat-slide-tiles-93b9d4"
        />,
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1646030/Cat_Slide_Tiles/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: unlockTheCat,
      alt: "Cat trapped in a pen with stone blocks blocking the way out.",
      title: "Unlock The Cat",
      description: [
        {
          id: uuidv4(),
          text: "Kitty is unable to reach her destination due to some rocks in her path. He could jump over the rocks, but he just doesn't want to do that, as he claims to be very tiring. So it's up to you to carry out the heavy labor for the comfort of this little kitten.",
        },
      ],
      links: [
        <NintendoSwitchBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.qubyteinteractive.com/games/unlock-the-cat/"
        />,
        <EpicGamesBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.epicgames.com/pt-BR/p/unlock-the-cat-487fac"
        />,
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1554550/Unlock_The_Cat/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: catsBalance,
      alt: "Pixel art of cats in geometric shapes balanced on a platform over a river, with the sky on the horizon as a backdrop.",
      title: "Cats Balance",
      description: [
        {
          id: uuidv4(),
          text: "Balance the cats and don't let them fall into the water in this 2D physics puzzler.",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/2923220/Cats_Balance/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: noCatFightsHere,
      alt: "Happy cats jumping on the roof of city buildings.",
      title: "No Cat Fights Here!",
      description: [
        {
          id: uuidv4(),
          text: "Let's avoid catfights on the roof? Draw a path for each cat to follow and keep them from bumping into each other along the way.",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1942540/No_Cat_Fights_Here/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: miningCats,
      alt: "Three cute cats in front of a mine.",
      title: "Mining Cats",
      description: [
        {
          id: uuidv4(),
          text: "Mining Cats is a type of logic puzzle that involves blasting rocks and creating paths that connect mines of gemstones of the same color.",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1837920/Mining_Cats/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: farmKittenPuzzlePipes,
      alt: "Farm with exposed underground irrigation pipeline.",
      title: "Farm Kitten - Puzzle Pipes",
      description: [
        {
          id: uuidv4(),
          text: "Help the kitten rotate the pipes to bring water to his farm. The more the kitten plants, the more money he has to fulfill his dreams as a cat.",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1721270/Farm_Kitten__Puzzle_Pipes/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: ludo,
      alt: "Ludo board with dice thrown on the screen.",
      title: "Ludo",
      description: [
        {
          id: uuidv4(),
          text: "Ludo is a strategy board game, in which the players race their four piece from start to finish according to the rolls of a single die. Ludo is derived from the Indian game Pachisi, but simpler. The game and its variations are popular in many countries and under various names.",
        },
      ],
      links: [
        <AirConsoleBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://www.airconsole.com/play/ludo"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: theVillagerAndTheWerewolf,
      alt: "Werewolf with glowing eyes and open mouth showing teeth.",
      title: "The Villager and the Werewolf - A jigsaw puzzle tale",
      description: [
        {
          id: uuidv4(),
          text: (
            <>
              In this game, when you fit the last piece of each jigsaw, you will
              hear a fantastic werewolf story written by Marta Machado{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/marta.machado.rocha/"
                rel="noreferrer"
              >
                (@marta.machado.rocha)
              </a>{" "}
              and illustrated by Alexandre Rocha{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/semdizer/"
                rel="noreferrer"
              >
                (@semdizer)
              </a>
              .
            </>
          ),
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/agecheck/app/2157100/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: jigsawBestiary,
      alt: "Partially assembled jigsaw puzzle showing Quibungo devouring its victims.",
      title: "Jigsaw Bestiary",
      description: [
        {
          id: uuidv4(),
          text: (
            <>
              Let&apos;s put the pieces together and meet amazing creatures.
              Here, the true mythologies behind the monsters are explained after
              solving each jigsaw. The beasts were illustrated by Alexandre
              Rocha{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/semdizer/"
                rel="noreferrer"
              >
                (@semdizer)
              </a>{" "}
              in his unique artistic style.
            </>
          ),
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1889650/Jigsaw_Bestiary/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: giveMeMorePills,
      alt: "Car jumping off a ramp and running over character, with pills flying across the screen.",
      title: "Give Me More Pills",
      description: [
        {
          id: uuidv4(),
          text: "Set up a schedule for your character to take pills at the right time and in the right order. The side effects of the pills make him jump, walk, run. Then press Play. The character starts performing the action that each pill causes at the exact time he takes it. Reach the highlighted area. Survive!",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/agecheck/app/1752610/"
        />,
      ],
    },
    {
      id: uuidv4(),
      src: lostAstronaut,
      alt: "Rocket taking off leaving a trail of smoke behind.",
      title: "Lost Astronaut",
      description: [
        {
          id: uuidv4(),
          text: "Control a spaceship and attempts to land safely on blue platforms. You can move the ship and burn fuel to fire a thruster, attempting to gently land on marked areas. A new scenario is loaded after every successful landing.",
        },
      ],
      links: [
        <SteamBtn
          id={uuidv4()}
          key={uuidv4()}
          href="https://store.steampowered.com/app/1481140/Lost_Astronaut/"
        />,
      ],
    },
  ];

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
