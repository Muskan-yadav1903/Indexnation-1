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
          We construct strategic communication systems that strengthen institutional
           confidence, elevate corporate standing, and protect reputation across every 
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
          <div className="card-grid" style={styles.cardGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className="card1"
                style={styles.card1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.border = "1px solid #2563eb";
                  e.currentTarget.style.boxShadow =
                    "0 25px 50px rgba(37, 99, 235, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.border = "1px solid #1a1a22";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="cardIcon1" style={styles.cardIcon1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path d="M14.78 5.81638C14.78 5.27801 14.4979 4.79138 14.1718 4.36304C13.8369 3.92328 13.643 3.40166 13.643 2.8423C13.643 1.27254 15.1701 0 17.0538 0C18.9375 0 20.4645 1.27254 20.4645 2.8423C20.4645 3.40166 20.2706 3.92328 19.9358 4.36304C19.6097 4.79138 19.3276 5.27801 19.3276 5.81638C19.3276 6.32019 19.7486 6.72237 20.2515 6.69237C23.1478 6.51954 25.9973 6.17466 28.7901 5.6679C29.0974 5.61212 29.4142 5.68527 29.666 5.87015C29.9178 6.05504 30.0824 6.33537 30.1212 6.64532C30.4608 9.35797 30.6533 12.116 30.6906 14.911C30.698 15.4664 30.2471 15.9167 29.6917 15.9169C29.1533 15.9169 28.6667 15.6348 28.2383 15.3087C27.7986 14.9738 27.277 14.78 26.7176 14.78C25.1478 14.78 23.8753 16.307 23.8753 18.1907C23.8753 20.0744 25.1478 21.6015 26.7176 21.6015C27.277 21.6015 27.7986 21.4076 28.2383 21.0727C28.6667 20.7466 29.1533 20.4645 29.6917 20.4645C30.1623 20.4645 30.5359 20.8612 30.5019 21.3305C30.322 23.8144 30.0193 26.2645 29.5998 28.6748C29.5176 29.1475 29.1474 29.5177 28.6747 29.5999C25.9171 30.0799 23.1074 30.4069 20.2546 30.572C19.7498 30.6012 19.3276 30.1973 19.3276 29.6917C19.3276 29.1533 19.6097 28.6667 19.9358 28.2383C20.2706 27.7986 20.4645 27.277 20.4645 26.7176C20.4645 25.1478 18.9375 23.8753 17.0538 23.8753C15.1701 23.8753 13.643 25.1478 13.643 26.7176C13.643 27.277 13.8369 27.7986 14.1718 28.2383C14.4979 28.6667 14.78 29.1533 14.78 29.6917C14.78 30.2398 14.3312 30.6825 13.7833 30.6669C11.3738 30.5986 8.99285 30.4148 6.64587 30.121C6.33592 30.0822 6.05559 29.9176 5.8707 29.6658C5.68582 29.414 5.61268 29.0973 5.66845 28.7899C6.11242 26.3433 6.43216 23.8531 6.62081 21.3261C6.65565 20.8595 6.28432 20.4645 5.81638 20.4645C5.27801 20.4645 4.79138 20.7466 4.36304 21.0727C3.92328 21.4076 3.40166 21.6015 2.8423 21.6015C1.27254 21.6015 0 20.0744 0 18.1907C0 16.307 1.27254 14.78 2.8423 14.78C3.40166 14.78 3.92328 14.9738 4.36304 15.3087C4.79138 15.6348 5.27801 15.9169 5.81638 15.9169C6.37175 15.9169 6.82269 15.4666 6.81505 14.9113C6.7811 12.4431 6.62236 10.0053 6.3449 7.60415C6.30506 7.25931 6.42493 6.91517 6.67038 6.66972C6.91584 6.42426 7.25998 6.30439 7.60481 6.34424C9.63959 6.57936 11.7006 6.72923 13.7841 6.79016C14.3315 6.80616 14.78 6.36398 14.78 5.81638Z" fill="#38A44C"/>
                  </svg>
                </div>

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