import { useScrollReveal } from "../../utils/useScrollReveal";

import "./styles.css";

import { Navigation } from "../../components/Navigation";
import { Section } from "../../components/Section";
import { New } from "../../components/New";
import { Footer } from "../../components/Footer";
import { BackToTopBtn } from "../../components/BackToTopBtn";

import newsData from "../../../src/data/newsData.jsx";

export function News() {
  useScrollReveal(`
    #news .cards,
    #news .card,
    #news .card p,
    #news .card h3
  `);

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
