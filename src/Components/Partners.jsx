import React from "react";
import $style from "../styles/style";

import truecaller from "../assets/image1.png";
import mendanta from "../assets/image3.png";
import adani from "../assets/image2.png";
import milkbasket from "../assets/image3.png";
import bandpicked from "../assets/image4.png";
import emaar from "../assets/image1.png";

export default function Partners() {

  const logos = [
    truecaller,
    mendanta,
    adani,
    milkbasket,
    bandpicked,
    emaar,
  ];

  const PartnerRow = ({ direction }) => (
    <div style={$style.partnerRowWrapper}>
      <div
        className="partner-track"
        style={{
          ...$style.partnerTrack,
          animation:
            direction === "right"
              ? "partnerScrollRight 25s linear infinite"
              : "partnerScrollLeft 25s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} style={$style.partnerLogoWrapper}>
            <img className="partner-logo" src={logo} alt="partner" style={$style.partnerLogo} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes partnerScrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          @keyframes partnerScrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <section className="partners-section" style={$style.partnersSection}>
        <div style={$style.partnersContainer}>

          {/* <h2 style={$style.partnersHeading}>
            Media <span style={$style.partnerBlue}>Partners</span>
          </h2> */}
          <h2 style={$style.partnersHeading} className="reveal partners-title">
  Media <span style={$style.partnerBlue} className="shine-text">Partners</span>
</h2>

          <PartnerRow direction="right" />
          <PartnerRow direction="left" />

        </div>
      </section>
    </>
  );
}
