// import Navbar from "../Components/Navbar";
// // import Provide from "../Components/Provide";
// import Contact from "../Components/Contact";
// import Footer from "../Components/Footer";

// import $style from "../styles/style";
// import "../styles/responsive.css";
// import "../styles/animations.css";

// export default function Services() {
//   return (
    
//     <div style={$style.h4Regular}>
      
//       <h1 style={$style.h4Regularcolor}>hii</h1>
//       <Navbar />
//       <Contact />
//       <Footer />
//       {/* <Provide /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }
import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/style";

import serviceImg from "../assets/service.png";

export default function Services() {
  return (
    <> 
    <Navbar />
    <div style={styles.page}>
      <div style={styles.card}>

        {/* LEFT */}
        <div style={styles.left}>
          <h1 style={styles.title}>
            Investor Relations,
            <br />
            Financial Communications
            <br />
            & Corporate Reputation
          </h1>

          <p style={styles.text}>
            Build investor confidence with a clear equity story and
            consistent market communication
          </p>

          <button style={styles.button}>
            Get an Appointment →
          </button>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <img src={serviceImg} alt="service" style={styles.image} />

          <div style={{ ...styles.tag, ...styles.greenTag1 }}>
            Intelligent Content and Report Systems
          </div>

          <div style={{ ...styles.tag, ...styles.blueTag1 }}>
            Leadership & Founder Positioning
          </div>

          <div style={{ ...styles.tag, ...styles.blueTag2 }}>
            Reputation Stewardship and Corporate Trust Architecture
          </div>

          <div style={{ ...styles.tag, ...styles.greenTag2 }}>
            Investor Relations and Financial Storytelling
          </div>

          <div style={{ ...styles.tag, ...styles.greenTag3 }}>
            Media and Influence Outreach
          </div>

          <div style={{ ...styles.tag, ...styles.blueTag3 }}>
            Post-IPO Momentum and Market Continuity
          </div>

        </div>
      </div>
    </div>
    </>
  );
}