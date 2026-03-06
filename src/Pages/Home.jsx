import Navbar from "../Components/Navbar";
import heroImage from "../assets/hero.png";
import TrustSection from "../Components/TrustSection";
import Clients from "../Components/Clients";
import Provide from "../Components/Provide";
import Sector from "../Components/Sector";
import Strategy from "../Components/Strategy";
import InfluenceIndex from "../Components/InfluenceIndex";

import $style from "../styles/style";
import "../styles/responsive.css";

export default function Home() {
  return (
    <div style={$style.h4Regular}>
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
          <p style={$style.readMore}>Read More ↓</p>
        </div>

        <div style={$style.h4Regular}>
          <button style={$style.primaryButton}>Get an Appointment</button>
        </div>
      </div>

      </div> {/* end hero-wrapper */}

      <TrustSection />
      <Clients />
      <Provide />
      <Sector />
      <Strategy />
      <InfluenceIndex />
    </div>
  );
}

