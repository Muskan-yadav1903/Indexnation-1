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
// import { useEffect } from "react";
import { useEffect, useState } from "react";

import $style from "../styles/style";
import "../styles/responsive.css";
import "../styles/animations.css";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
// cursor 

useEffect(() => {

  const cursor = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor-dot");

  let scrolling;

  const moveCursor = (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    // mouse move hone par 2 circles
    cursor.style.opacity = "1";

  };

  const handleScroll = () => {

    // scroll par outer circle hide
    cursor.style.opacity = "0";

    clearTimeout(scrolling);

    scrolling = setTimeout(() => {
      cursor.style.opacity = "1";
    }, 150);

  };

  window.addEventListener("mousemove", moveCursor);
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

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
    <>

    
    
    <div className="cursor"></div>
<div className="cursor-dot"></div>

    <div className="home-page" style={$style.h4Regular}>
      <Navbar />

      {/* Hero section wrapper (relative positioning) */}
      <div id="home" className="hero-wrapper" style={{ position: "relative" }}>
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

<h1
  className="hero-title"
  style={{ ...$style.DisplayText1Bold, textAlign: "left" }}
>
  Where trust becomes capital
  <br />
  & where perception becomes
  <br />
  performance.
</h1>

        {/* <p style={$style.lightcolor}> */}
        <p
  style={{
    ...$style.lightcolor,
    fontSize: expanded ? "15px" : "13px",
    lineHeight: expanded ? "1.6" : "1.8"
  }}
>
              Narrative discipline drives market respect. When a 
              company controls its story, it influences how it is valued. 
              Communication is not a cost centre—it is a strategic lever that 
              shapes perception, protects reputation, and influences price 
              without operational risk.Shareholders invest in numbers but 
              stay for clarity. Without a clear narrative, even strong 
              performance can be overlooked.


  {/* {expanded && (
    <>
      <br /><br />
      Shareholders invest in numbers, but they stay for clarity.
      Without a deliberate narrative, even strong performance can be
      underestimated, misunderstood, or simply overlooked. Companies
      that treat communication as strategy, not afterthought, shape
      their own destiny instead of being shaped by speculation.
    </>
  )} */}
</p>

        <div style={$style.h4Regular}>
        {/* <p
  style={$style.readMore}
  className="read-more"
  onClick={() => setExpanded(!expanded)}
>
  {expanded ? "Read Less" : "Read More"}

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
</p> */}
        </div>

        <div style={$style.h4Regular}>
          {/* <button style={{...$style.primaryButton, marginTop: "20px"}}  className="appointment-btn ">
  Get an Appointment
</button> */}
<button
  style={{ ...$style.primaryButton, marginTop: "20px" }}
  className="appointment-btn"
  onClick={() =>
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
  }
>
  Get an Appointment
</button>
        </div>
      </div>

      </div> 
      {/* end hero-wrapper */}

      {/* <div className="reveal"><TrustSection /></div>
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
<div className="reveal"><Footer /></div> */}


<div className="reveal"><TrustSection /></div>
<div className="reveal"><Clients /></div>

<div id="services" className="reveal">
  <Provide />
</div>

<div className="reveal"><Sector /></div>

<div id="strategy" className="reveal">
  <Strategy />
</div>

<div id="publications" className="reveal">
  <InfluenceIndex />
</div>

<div className="reveal"><ExpansionGrid /></div>
<div className="reveal"><Performance /></div>
<div className="reveal"><ResolvedCases /></div>
<div className="reveal"><Partners /></div>

<div id="contact" className="reveal">
  <Contact />
</div>

<div className="reveal"><Footer /></div>
    </div>

    </>
  );
}

