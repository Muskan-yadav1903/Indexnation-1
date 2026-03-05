import React from "react";
import $style from "../styles/style";
import handshake from "../assets/handshake.png";


export default function TrustSection() {
  return (
    <section style={$style.trustSection}>
      <div style={$style.trustContainer}>

        {/* LEFT SIDE */}
        <div style={$style.trustLeft}>
          <h2 style={$style.displayText2Bold}>
            Engineering Trust in <br />
            High-Stakes Markets
          </h2>

           <p style={{ ...$style.h4Regular, marginTop: "30px", color: "#3C3C43" }}>
            Index Nation exists to serve leaders who recognise this truth. <br />
            <br />
            We partner with high-growth companies and publicly listed enterprises to build trust, deepen investor belief, and align perception with performance through disciplined communication and intelligent influence.
          </p>

          <ul style={$style.h4Regular}>
            {[
              "We do not amplify noise.",
              "We engineer clarity.",
              "We build credibility that compounds valuation."
            ].map((item, index) => (
              <li key={index} style={$style.trustListItem}>
                <div style={$style.trustCheck}>✓</div>
                <span style={$style.bodyLargeRegular}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div style={$style.trustRight}>
          <img
            src={handshake}
            alt="Trust"
            style={$style.handshake}
          />

          
        </div>

      </div>
    </section>
  );
}