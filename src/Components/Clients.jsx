import React from "react";
import $style from "../styles/style";

// import truecaller from "../assets/image1.png";
// import mendanta from "../assets/image3.png";
// import adani from "../assets/image2.png";
// import milkbasket from "../assets/image3.png";
// // import bandpicked from "../assets/companieslogos/17.webp";
// import emaar from "../assets/image1.png";


import logo1 from "../assets/companieslogos/1.webp";
import logo2 from "../assets/companieslogos/2.webp";
import logo3 from "../assets/companieslogos/3.webp";
import logo4 from "../assets/companieslogos/4.webp";
import logo5 from "../assets/companieslogos/5.webp";
import logo6 from "../assets/companieslogos/6.webp";
import logo7 from "../assets/companieslogos/7.webp";
import logo8 from "../assets/companieslogos/8.webp";
import logo9 from "../assets/companieslogos/9.webp";
import logo10 from "../assets/companieslogos/10.webp";
import logo11 from "../assets/companieslogos/11.webp";
import logo12 from "../assets/companieslogos/12.webp";
import logo13 from "../assets/companieslogos/13.webp";
import logo14 from "../assets/companieslogos/14.webp";
import logo15 from "../assets/companieslogos/15.webp";
import logo16 from "../assets/companieslogos/16.webp";
import logo17 from "../assets/companieslogos/17.webp";
import logo18 from "../assets/companieslogos/18.webp";
import logo19 from "../assets/companieslogos/19.webp";
import logo20 from "../assets/companieslogos/20.webp";
import logo21 from "../assets/companieslogos/21.webp";
import logo22 from "../assets/companieslogos/22.webp";
import logo23 from "../assets/companieslogos/23.webp";
import logo24 from "../assets/companieslogos/24.webp";
import logo25 from "../assets/companieslogos/25.webp";
import logo26 from "../assets/companieslogos/26.webp";
import logo27 from "../assets/companieslogos/27.webp";
import logo28 from "../assets/companieslogos/28.webp";
import logo29 from "../assets/companieslogos/29.webp";
import logo30 from "../assets/companieslogos/30.webp";



export default function Clients() {

  const logos = [
    // truecaller,
    // mendanta,
    // adani,
    // milkbasket,
    // // bandpicked,
    // emaar,

    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24,
    logo25,
    logo26,
    logo27,
    logo28,
    logo29,
    logo30,

  ];

  const LogoRow = ({ direction }) => (
    <div style={$style.logoRowWrapper}>
      <div
        className="logo-track"
        style={{
          ...$style.logoTrack,
          animation:
            direction === "right"
              ? "scrollRight 65s linear infinite"
              : "scrollLeft 65s linear infinite",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-wrapper" style={$style.logoWrapper}>
            <img className="client-logo" src={logo} alt="client" style={$style.clientLogo} />
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

      <section className="clients-section" style={$style.clientsSection}>
        <div style={$style.clientsContainer}>

          {/* <h2 style={$style.clientsHeading}>
            We work with <span style={$style.blueText}>companies</span> shaping 
            India’s growth story and global ambition.
          </h2> */}

          <h2 style={$style.clientsHeading} className="reveal clients-title">
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
