import React from "react";
import styles from "../styles/style";

import people from "../assets/ui-checks-grid.svg";
import pen from "../assets/vector-pen.svg";
import headset from "../assets/headset.svg";
import briefcase from "../assets/people.svg";
import gem from "../assets/gem2.svg";
import lighting from "../assets/lighting.svg";
import manufacturing from "../assets/briefcase.svg";

export default function Sectors() {
  return (
    <section className="sectors-section" style={styles.sectorsSection}>
      <div className="sectors-container" style={styles.container}>

        {/* <h2 style={styles.DisplayTextcolor}>Sectors We Serve</h2> */}
        <h2 style={styles.DisplayTextcolor} className="reveal sectors-title">
  Sectors We Serve
</h2>

        {/* <p style={styles.h4Regularcolor}>
          Business isn't one size fits all. Every industry requires a custom solution.
          Learn more about how we've helped businesses in your industry by clicking below. <br />  
          <br /> 
          <br />
          <br />

        </p> */}
        <p style={styles.h4Regularcolor} className="reveal sectors-text">
  Business isn't one size fits all. Every industry requires a custom solution.
  Learn more about how we've helped businesses in your industry by clicking below. <br />
  <br />
  <br />
  <br />
</p>

        <div className="sectorGrid" style={styles.grid}>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={people} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Consumer</h3>
            <p style={styles.h4Lightcolor}>
              We support consumer brands in building trust and influencing buying decisions.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={pen} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Mobility</h3>
            <p style={styles.h4Lightcolor}>
              We help mobility brands convey innovation and future-ready thinking.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={headset} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Energy</h3>
            <p style={styles.h4Lightcolor}>
              We support energy companies in communicating sustainability and long-term impact.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={briefcase} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Retail</h3>
            <p style={styles.h4Lightcolor}>
              We help retail brands strengthen customer trust and drive consistent growth.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={gem} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>BFSI</h3>
            <p style={styles.h4Lightcolor}>
              We help BFSI brands build credibility, trust and long-term confidence.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={lighting} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Technology</h3>
            <p style={styles.h4Lightcolor}>
              We help technology companies communicate innovation with clarity.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.card}> */}
          <div className="sectorCard reveal sector-card" style={styles.card}>
            <div style={styles.iconBox}>
              <img className="sector-icon" src={manufacturing} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Manufacturing</h3>
            <p style={styles.h4Lightcolor}>
              We help manufacturing brands articulate strength and operational excellence.
            </p>
          </div>

          {/* <div className="sectorCard" style={styles.moreCard}> */}
          <div  style={styles.moreCard}>
            <div >
              <h3 style={styles.h4newBoldcolor}>+4</h3>
              <div style={styles.h4newBoldcolor}>More</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
