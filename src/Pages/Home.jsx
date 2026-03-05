import Navbar from "../Components/Navbar";
import heroImage from "../assets/hero.png";
import TrustSection from "../Components/TrustSection";
import Clients from "../Components/Clients";
import Provide from "../Components/Provide";
import Sector from "../Components/Sector";
import Strategy from "../Components/Strategy";

import $style from "../styles/style";

export default function Home() {
  return (
    <div style={$style.h4Regular}>
      <Navbar />
      

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero"
        style={$style.heroImage}
      />

      {/* Dark Overlay */}
      <div style={$style.overlay}></div>

      {/* Content */}
      <div style={$style.heroContent}>
        <h1 style={$style.DisplayText1Bold}>
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
            <p style={$style.readMore}>
          Read More ↓
        </p>
        </div>

        <div style={$style.h4Regular}>
            <button style={$style.primaryButton}>
          Register Now
        </button>
        </div>
        
      </div>
      <TrustSection />
      <Clients />
      <Provide />
      <Sector />
      <Strategy />
    </div>
  );
}