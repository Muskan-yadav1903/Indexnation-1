// import { useState } from "react";
import { useState, useEffect } from "react";
import $style from "../styles/style";
import caseImg from "../assets/case.png";
import casepic from "../assets/pic.jpg";

import leftArrow from "../assets/expandleft.svg";
import rightArrow from "../assets/expandright.svg";
import arrow from "../assets/expand1.svg";

import "../styles/responsive.css";
import "../styles/animations.css";

export default function ResolvedCases() {

  const cases = [
    {
      date: "Financial - January 16, 2024",
      title: "Financial Restructuring for a Growing Business Startup",
      description:
        "We helped a scaling startup realign its financial strategy, restore stakeholder confidence, and create a foundation for sustainable growth.",
      image: caseImg,
    },
    {
      date: "Technology - February 10, 2024",
      title: "Digital Transformation for Retail Brand",
      description:
        "We guided a retail brand through digital expansion, improving market reach and strengthening customer engagement.",
      image: casepic,
    },
    {
      date: "Corporate - March 05, 2024",
      title: "Corporate Reputation Recovery Strategy",
      description:
        "Our team designed a strategic communication plan to rebuild trust and improve public perception.",
      image: caseImg,
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % cases.length);
  }, 2000); // 1000ms = 1 second

  return () => clearInterval(interval);

}, [cases.length]);

  const nextCase = () => {
    setCurrent((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrent((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="resolved-cases-section" style={$style.casesSection}>
      <div className="resolved-cases-container" style={$style.casesContainer}>

        <h2 className="resolved-cases-title reveal resolved-title" style={$style.displayText1Bold}>
          Our Resolved Cases
        </h2>

        <p className="resolved-cases-subtitle reveal resolved-subtitle" style={$style.casesSubtitle}>
          Real transformation measured in market respect, reach and reputation strength.
        </p>

        <div className="resolved-case-card reveal resolved-card" style={$style.caseCard}>

          <div className="resolved-case-left" style={$style.caseLeft}>
            <p className="resolved-case-meta" style={$style.bodyLargeLightcolor}>
              {cases[current].date}
            </p>

            <h3 className="resolved-case-heading" style={$style.h2Boldcolor}>
              {cases[current].title}
            </h3>

            <p className="resolved-case-description" style={$style.bodyLargeLightcolor}>
              {cases[current].description}
            </p>

            <button className="resolved-case-button case-btn" style={$style.caseButton}>
              Learn more
              <span className="case-btn-arrow">
                <img src={arrow} alt="arrow" />
              </span>
            </button>
          </div>

          <div className="resolved-case-right" style={$style.caseRight}>
            <img
              className="resolved-case-image resolved-img"
              src={cases[current].image}
              alt="Resolved case visual"
              style={$style.caseImage}
            />
          </div>

        </div>

        <div className="resolved-slider-controls reveal resolved-controls" style={$style.sliderControls}>

          <img
            className="resolved-slider-arrow"
            src={leftArrow}
            alt="Previous case"
            style={$style.arrowIcon}
            onClick={prevCase}
          />

          <div className="resolved-dots-wrapper" style={$style.dotsWrapper}>
            {cases.map((_, index) => (
              <span
                key={index}
                className="resolved-dot"
                style={current === index ? $style.activeDot : $style.dot}
              ></span>
            ))}
          </div>

          <img
            className="resolved-slider-arrow"
            src={rightArrow}
            alt="Next case"
            style={$style.arrowIcon}
            onClick={nextCase}
          />

        </div>

      </div>
    </section>
  );
}
