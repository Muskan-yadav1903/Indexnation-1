import React from "react";  
import $style from "../styles/style";
import handshake from "../assets/handshake.png";
import icon from "../assets/icons.svg";

export default function TrustSection() {
  return (
    <section id="trust" className="trust-section" style={$style.trustSection}>
      <div className="trust-container" style={$style.trustContainer}>

        {/* LEFT SIDE */}
        <div className="trust-left reveal trust-text" style={$style.trustLeft}>
          <h2 style={$style.displayText2Bold}>
            Engineering Trust in 
            High-Stakes Markets
          </h2>

          <p style={{ ...$style.h4Regular, marginTop: "10px", color: "#3C3C43" }}>
            Index Nation exists to serve leaders who recognise this truth. <br />
            <br />
            We partner with high-growth companies and publicly listed enterprises to build trust, deepen investor belief, and align perception with performance through disciplined communication and intelligent influence.
            <br />
            <br />
          </p>

          <ul style={$style.h4Regular}>
            {[
              "We do not amplify noise.",
              "We engineer clarity.",
              "We build credibility that compounds valuation."
            ].map((item, index) => (
              <li key={index} className="trust-item" style={$style.trustListItem}>
                {/* <div style={$style.trustCheck}>✓</div> */}
                <div style={$style.trustCheck}>
  <img src={icon} alt="check" style={{ width: "20px", height: "20px" }} />
</div>
                <span style={$style.bodyLargeRegular}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="trust-image reveal" style={$style.trustRight}>
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
