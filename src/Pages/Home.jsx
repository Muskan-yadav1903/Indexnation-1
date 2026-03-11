import Navbar from "../Components/Navbar";
import heroImage from "../assets/hero.png";
import TrustSection from "../Components/TrustSection";
import Clients from "../Components/Clients";
import Provide from "../Components/Provide";
import Sector from "../Components/Sector";
import Strategy from "../Components/Strategy";
import InfluenceIndex from "../Components/InfluenceIndex";
import ExpansionGrid from "../Components/ExpansionGrid";
import Performance from "../Components/Performance";
import ResolvedCases from "../Components/ResolvedCases";
import Partners from "../Components/Partners";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { useEffect } from "react";

import $style from "../styles/style";
import "../styles/responsive.css";
import "../styles/animations.css";

export default function Home() {

useEffect(() => {

  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();

}, []);




  return (
    <div className="home-page" style={$style.h4Regular}>
      <Navbar />

      {/* Hero section wrapper (relative positioning) */}
      <div className="hero-wrapper" style={{ position: "relative" }}>
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Hero"
          className="hero-image"
          style={$style.heroImage}
        />

        {/* Dark Overlay */}
        <div style={$style.overlay}></div>

        {/* Content */}
        <div className="hero-content" style={$style.heroContent}>
        <h1 className="hero-title" style={$style.DisplayText1Bold}>
          Where trust becomes capital & where perception becomes performance.
        </h1>

        <p style={$style.lightcolor}>
          There is a direct line between narrative discipline and market
          respect. When a company controls how it is understood, it controls
          how it is valued. The greatest leaders know that communication is
          not a cost centre. It is one of the few levers that can move
          perception, protect reputation, and influence price without adding
          operational risk.
        </p>

        <div style={$style.h4Regular}>
          {/* <p style={$style.readMore}>Read More ↓</p> */}
          {/* <p style={$style.readMore} className="read-more">Read More ↓</p> */}
          <p
  style={$style.readMore}
  className="read-more"
  onClick={() =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }
>
  Read More

  <span className="read-arrow">
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z"
        fill="#2F80ED"
      />
    </svg>
  </span>
</p>
        </div>

        <div style={$style.h4Regular}>
          {/* <button style={$style.primaryButton}>Get an Appointment</button> */}
          <button style={$style.primaryButton} className="appointment-btn">
  Get an Appointment
</button>
        </div>
      </div>

      </div> {/* end hero-wrapper */}

      {/* <TrustSection />
      <Clients />
      <Provide />
      <Sector />
      <Strategy />
      <InfluenceIndex />
      <ExpansionGrid />
      <Performance />
      <ResolvedCases />
      <Partners />
      <Contact />
      <Footer /> */}

      <div className="reveal"><TrustSection /></div>
<div className="reveal"><Clients /></div>
<div className="reveal"><Provide /></div>
<div className="reveal"><Sector /></div>
<div className="reveal"><Strategy /></div>
<div className="reveal"><InfluenceIndex /></div>
<div className="reveal"><ExpansionGrid /></div>
<div className="reveal"><Performance /></div>
<div className="reveal"><ResolvedCases /></div>
<div className="reveal"><Partners /></div>
<div className="reveal"><Contact /></div>
<div className="reveal"><Footer /></div>

    </div>
  );
}

