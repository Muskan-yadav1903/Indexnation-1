import React from "react";
import $style from "../styles/style";

import truecaller from "../assets/image1.png";
import mendanta from "../assets/image3.png";
import adani from "../assets/image2.png";
import milkbasket from "../assets/image3.png";
import bandpicked from "../assets/image4.png";
import emaar from "../assets/image1.png";

export default function Clients() {

  const logos = [
    truecaller,
    mendanta,
    adani,
    milkbasket,
    bandpicked,
    emaar,
  ];

  const LogoRow = ({ direction }) => (
    <div style={$style.logoRowWrapper}>
      <div
        className="logo-track"
        style={{
          ...$style.logoTrack,
          animation:
            direction === "right"
              ? "scrollRight 25s linear infinite"
              : "scrollLeft 25s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} style={$style.logoWrapper}>
            <img src={logo} alt="client" style={$style.clientLogo} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Animation styles */}
      <style>
        {`
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <section style={$style.clientsSection}>
        <div style={$style.clientsContainer}>

          {/* <h2 style={$style.clientsHeading}>
            We work with <span style={$style.blueText}>companies</span> shaping 
            India’s growth story and global ambition.
          </h2> */}

          <h2 style={$style.clientsHeading} className="reveal">
  We work with <span className="shine-text">companies</span> shaping 
  India’s growth story and global ambition.
</h2>
          {/* Row 1 */}
          <LogoRow direction="right" />

          {/* Row 2 */}
          <LogoRow direction="left" />

        </div>
      </section>
    </>
  );
}