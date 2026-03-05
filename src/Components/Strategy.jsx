import React from "react";
import styles from "../styles/style";

import outcomeImg from "../assets/outcome.png";
import whyImg from "../assets/why.png";
import commitmentImg from "../assets/commitment.png";
import buildImg from "../assets/build.png";

export default function Strategy() {
  return (
    <section style={styles.strategySection}>
      <div style={styles.strategyContainer}>

        <div style={styles.strategyTopRow}>
          <div>
            <p style={styles.strategySmallTitle}>How We Work</p>
            <h2 style={styles.strategyMainTitle}>
              Where Strategy <br /> Meets Action
            </h2>
          </div>

          <p style={styles.strategyTopDescription}>
            Our <span style={styles.strategyLinkText}>Reputation Index Framework</span> aligns
            communications to measurable enterprise value. It brings coherence to
            voice, discipline to timing and integrity to message.
          </p>
        </div>

        <div style={styles.strategyGrid}>

          <div style={styles.strategyCard}>
            <img src={outcomeImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>The Outcome</h3>
              <ul style={styles.strategyList}>
                <li>A story investors understand</li>
                <li>A reputation they rely on</li>
                <li>A leadership presence they respect</li>
                <li>A valuation supported by belief, not noise</li>
              </ul>
            </div>
          </div>

          <div style={styles.strategyCard}>
            <img src={whyImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>Why IndexNation</h3>
              <ul style={styles.strategyList}>
                <li>Markets reward clarity</li>
                <li>Investors reward consistency</li>
                <li>History rewards those who are understood</li>
                <li>We are the steady hand behind visible leadership</li>
              </ul>
            </div>
          </div>

          <div style={styles.strategyCard}>
            <img src={commitmentImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>The IndexNation Commitment</h3>
              <ul style={styles.strategyList}>
                <li>Integrity in thinking</li>
                <li>Precision in language</li>
                <li>Strength in execution</li>
                <li>Trust that compounds, year after year</li>
              </ul>
            </div>
          </div>

          <div style={styles.strategyCard}>
            <img src={buildImg} alt="" style={styles.strategyCardImage} />
            <div>
              <h3 style={styles.strategyCardTitle}>Let’s Build Something Enduring</h3>
              <ul style={styles.strategyList}>
                <li>A story investors understand</li>
                <li>A reputation they rely on</li>
                <li>A leadership presence they respect</li>
                <li>A valuation supported by belief, not noise</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}