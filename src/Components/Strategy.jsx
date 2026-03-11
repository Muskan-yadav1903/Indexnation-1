import React from "react";
import styles from "../styles/style";

import outcomeImg from "../assets/outcome.png";
import whyImg from "../assets/why.png";
import commitmentImg from "../assets/commitment.png";
import buildImg from "../assets/build.png";

export default function Strategy() {
  return (
    <section className="strategy-section" style={styles.strategySection}>
      <div className="strategy-container" style={styles.strategyContainer}>

        <div className="strategyTopRow" style={styles.strategyTopRow}>
          <div>
            {/* <p style={styles.h4Regularcolor}>How We Work</p> */}
            <p style={styles.h4Regularcolor} className="reveal strategy-subtitle">
  How We Work
</p>
            {/* <h2 style={styles.DisplayTextcolor}> */}
            <h2 style={styles.DisplayTextcolor} className="reveal strategy-title">
              Where Strategy <br /> Meets Action
            </h2>
          </div>

          {/* <p style={styles.strategyTopDescription}> */}
          <p style={styles.strategyTopDescription} className="reveal strategy-text strategyTopDescription">
            Our <span style={styles.blueText}>Reputation Index Framework</span> aligns
            communications to measurable enterprise value. It brings coherence to
            voice, discipline to timing and integrity to message.
          </p>
        </div>

        <div className="strategy-grid" style={styles.strategyGrid}>

          {/* <div style={styles.strategyCard}> */}
          <div className="reveal strategy-card" style={styles.strategyCard}>
            <img src={outcomeImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>The Outcome</h3>
              <ul style={styles.bodyLargeLight}>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A story investors understand
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A reputation they rely on
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A leadership presence they respect
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A valuation supported by belief, not noise
                </li>
              </ul>
            </div>
          </div>

          {/* <div style={styles.strategyCard}> */}
          <div className="reveal strategy-card" style={styles.strategyCard}>
            <img src={whyImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>Why IndexNation</h3>
              <ul style={styles.bodyLargeLight}>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  Markets reward clarity
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  Investors reward consistency
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  History rewards those who are understood
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  We are the steady hand behind visible leadership
                </li>
              </ul>
            </div>
          </div>

          {/* <div style={styles.strategyCard}> */}
          <div className="reveal strategy-card" style={styles.strategyCard}>
            <img src={commitmentImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>The IndexNation Commitment</h3>
              <ul style={styles.bodyLargeLight}>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  Integrity in thinking
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  Precision in language
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  Strength in execution
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  Trust that compounds, year after year
                </li>
              </ul>
            </div>
          </div>

          {/* <div style={styles.strategyCard}> */}
          <div className="reveal strategy-card" style={styles.strategyCard}>
            <img src={buildImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>Let’s Build Something Enduring</h3>
              <ul style={styles.bodyLargeLight}>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A story investors understand
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A reputation they rely on
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A leadership presence they respect
                </li>
                <li style={styles.trustListItem}>
                  <div style={styles.trustCheck}>✓</div>
                  A valuation supported by belief, not noise
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
