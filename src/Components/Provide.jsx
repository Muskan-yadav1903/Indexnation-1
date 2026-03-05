import React from "react";
import styles from "../styles/style";

export default function WhatWeDo() {
  const services = [
    {
      title: "Investor Relations and Financial Storytelling",
      text: "Narratives that translate numbers into conviction. Quarterly and annual earnings communication, investor materials, analyst engagement, market guidance framing and sentiment tracking.",
    },
    {
      title: "Reputation Stewardship and Corporate Trust Architecture",
      text: "Protective narrative strategy for leaders who bear public responsibility. Crisis preparedness, risk communication protocols, and reputation durability frameworks.",
    },
    {
      title: "Media and Influence Outreach",
      text: "Editorial relationships across mainstream, regional and digital media. Structured coverage planning, milestone visibility and distribution across networks for meaningful national scale.",
    },
    {
      title: "Post-IPO Momentum and Market Continuity",
      text: "Visibility programs that sustain confidence beyond listing. Narrative alignment for guidance cycles, milestone amplification and expectation management.",
    },
    {
      title: "Intelligent Content and Report Systems",
      text: "Quarterly reports, annual reports, ESG communication, whitepapers and structured content grids that reinforce transparency and reliability.",
    },
    {
      title: "Leadership & Founder Positioning",
      text: "Thought leadership that is earned, not manufactured. Keynotes, authored columns, investor engagement and sector voice development.",
    },
  ];

  return (
    <section style={styles.whatSection}>
      <div style={styles.whatContainer}>

        <h2 style={styles.DisplayTextcolor}>What we do</h2>

        <p style={styles.h4Regularcolor}>
          We construct strategic communication systems that strengthen institutional<br />
           confidence, elevate corporate standing, and protect reputation across every <br />
           stakeholder ecosystem.
        </p>

        {/* Core Practices Button */}
        <div style={styles.h4Regular}>
          <button
            style={styles.primaryButton}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow =
                "0 12px 30px rgba(37, 99, 235, 0.55)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)";
              e.target.style.boxShadow =
                "0 8px 20px rgba(37, 99, 235, 0.35)";
            }}
          >
            Core Practices
          </button>
        </div>

        {/* Cards Section */}
        <div style={styles.bigCardSection}>
          <div style={styles.cardGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                style={styles.card1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.border = "1px solid #2563eb";
                  e.currentTarget.style.boxShadow =
                    "0px 10px 35px rgba(37,99,235,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.border = "1px solid #1a1a22";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={styles.cardIcon1}>🧩</div>

                <h3 style={styles.h3Bold}>{service.title}</h3>
                <p style={styles.bodyLargeLight}>{service.text}</p>

                <button style={styles.learnBtn}>Learn More</button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}