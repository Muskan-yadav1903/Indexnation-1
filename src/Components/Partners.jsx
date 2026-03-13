import React from "react";
import $style from "../styles/style";

// import truecaller from "../assets/image1.png";
// import mendanta from "../assets/image3.png";
// import adani from "../assets/image2.png";
// import milkbasket from "../assets/image3.png";
// import bandpicked from "../assets/image4.png";
// import emaar from "../assets/image1.png";



import plogo1 from "../assets/partnerslogos/p1.webp";
import plogo2 from "../assets/partnerslogos/p2.webp";
import plogo3 from "../assets/partnerslogos/p3.webp";
import plogo4 from "../assets/partnerslogos/p4.webp";
import plogo5 from "../assets/partnerslogos/p5.webp";
import plogo6 from "../assets/partnerslogos/p6.webp";
import plogo7 from "../assets/partnerslogos/p7.webp";
import plogo8 from "../assets/partnerslogos/p8.webp";
import plogo9 from "../assets/partnerslogos/p9.webp";
import plogo10 from "../assets/partnerslogos/p10.webp";
import plogo11 from "../assets/partnerslogos/p11.webp";
import plogo12 from "../assets/partnerslogos/p12.webp";
import plogo13 from "../assets/partnerslogos/p13.webp";
import plogo14 from "../assets/partnerslogos/p14.webp";
import plogo15 from "../assets/partnerslogos/p15.webp";
import plogo16 from "../assets/partnerslogos/p16.webp";
import plogo17 from "../assets/partnerslogos/p17.webp";
import plogo18 from "../assets/partnerslogos/p18.webp";
import plogo19 from "../assets/partnerslogos/p19.webp";
import plogo20 from "../assets/partnerslogos/p20.webp";
import plogo21 from "../assets/partnerslogos/p21.webp";
import plogo22 from "../assets/partnerslogos/p22.webp";
import plogo23 from "../assets/partnerslogos/p23.webp";
import plogo24 from "../assets/partnerslogos/p24.webp";
import plogo25 from "../assets/partnerslogos/p25.webp";
import plogo26 from "../assets/partnerslogos/p26.webp";
import plogo27 from "../assets/partnerslogos/p27.webp";
import plogo28 from "../assets/partnerslogos/p28.webp";
import plogo29 from "../assets/partnerslogos/p29.webp";
import plogo30 from "../assets/partnerslogos/p30.webp";

import plogo31 from "../assets/partnerslogos/p31.webp";
import plogo32 from "../assets/partnerslogos/p32.webp";
import plogo33 from "../assets/partnerslogos/p33.webp";
import plogo34 from "../assets/partnerslogos/p34.webp";
import plogo35 from "../assets/partnerslogos/p35.webp";
import plogo36 from "../assets/partnerslogos/p36.webp";
import plogo37 from "../assets/partnerslogos/p37.webp";
import plogo38 from "../assets/partnerslogos/p38.webp";
import plogo39 from "../assets/partnerslogos/p39.webp";
import plogo40 from "../assets/partnerslogos/p40.webp";
import plogo41 from "../assets/partnerslogos/p41.webp";
import plogo42 from "../assets/partnerslogos/p42.webp";
import plogo43 from "../assets/partnerslogos/p43.webp";
// import plogo44 from "../assets/partnerslogos/p44.webp";
import plogo45 from "../assets/partnerslogos/p45.webp";
import plogo46 from "../assets/partnerslogos/p46.webp";



export default function Partners() {

  const logos = [
    // truecaller,
    // mendanta,
    // adani,
    // milkbasket,
    // bandpicked,
    // emaar,


        plogo1,
        plogo2,
        plogo3,
        plogo4,
        plogo5,
        plogo6,
        plogo7,
        plogo8,
        plogo9,
        plogo10,
        plogo11,
        plogo12,
        plogo13,
        plogo14,
        plogo15,
        plogo16,
        plogo17,
        plogo18,
        plogo19,
        plogo20,
        plogo21,
        plogo22,
        plogo23,
        plogo24,
        plogo25,
        plogo26,
        plogo27,
        plogo28,
        plogo29,
        plogo30,
        plogo31,
        plogo32,
        plogo33,
        plogo34,
        plogo35,
        plogo36,
        plogo37,
        plogo38,
        plogo39,
        plogo40,
        plogo41,
        plogo42,
        plogo43,
        // plogo44,
        plogo45,
        plogo46,
    
  ];

  const PartnerRow = ({ direction }) => (
    <div style={$style.partnerRowWrapper}>
      <div
        className="partner-track"
        style={{
          ...$style.partnerTrack,
          animation:
            direction === "right"
              ? "partnerScrollRight 65s linear infinite"
              : "partnerScrollLeft 65s linear infinite",
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
