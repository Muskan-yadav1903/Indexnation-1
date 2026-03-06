// import React from "react";
// import styles from "../styles/style";

// // Import icons from assets
// import people from "../assets/ui-checks-grid.svg";
// import pen from "../assets/vector-pen.svg";
// import headset from "../assets/headset.svg";
// import briefcase from "../assets/people.svg";
// import gem from "../assets/gem2.svg";
// import lighting from "../assets/lighting.svg";
// import manufacturing from "../assets/briefcase.svg";

// export default function Sectors() {
//   return (
//     <section style={styles.section}>
//       <div style={styles.outerContainer}>
//         <div style={styles.container}>
//           <h2 style={styles.DisplayTextcolor}>Sectors We Serve</h2>

//           <p style={styles.h4Regularcolor}>
//             Business isn't one size fits all. Every industry requires a custom
//             solution. Learn <br /> more about how we've helped businesses in your
//             industry by clicking below.
//           </p>

//           <div style={styles.grid}>
            
//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={people} alt="Consumer" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>Consumer</h3>
//               <p style={styles.lightcolor}>
//                 We support consumer brands in building trust and influencing buying decisions.
//               </p>
//             </div>

//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={pen} alt="Mobility" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>Mobility</h3>
//               <p style={styles.lightcolor}>
//                 We help mobility brands convey innovation and future-ready thinking.
//               </p>
//             </div>

//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={headset} alt="Energy" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>Energy</h3>
//               <p style={styles.lightcolor}>
//                 We support energy companies in sustainability and long-term impact.
//               </p>
//             </div>

//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={briefcase} alt="Retail" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>Retail</h3>
//               <p style={styles.lightcolor}>
//                 We help retail brands strengthen customer trust and growth.
//               </p>
//             </div>

//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={gem} alt="BFSI" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>BFSI</h3>
//               <p style={styles.lightcolor}>
//                 We help BFSI brands build credibility and confidence.
//               </p>
//             </div>

//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={lighting} alt="Technology" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>Technology</h3>
//               <p style={styles.lightcolor}>
//                 We help technology companies communicate innovation clearly.
//               </p>
//             </div>

//             <div style={styles.card}>
//               <div style={styles.iconBox}>
//                 <img src={manufacturing} alt="Manufacturing" style={styles.icon} />
//               </div>
//               <h3 style={styles.h4Bold}>Manufacturing</h3>
//               <p style={styles.lightcolor}>
//                 We help manufacturing brands articulate strength and precision.
//               </p>
//             </div>

//             <div style={styles.moreCard}>
//               <div>
//                 <div style={{ fontSize: "28px" }}>+4</div>
//                 <div>More</div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




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
    <section style={styles.sectorsSection}>
      <div style={styles.container}>

        <h2 style={styles.DisplayTextcolor}>Sectors We Serve</h2>

        <p style={styles.h4Regularcolor}>
          Business isn't one size fits all. Every industry requires a custom solution.
          Learn more about how we've helped businesses in your industry by clicking below. <br />  
          <br /> 
          <br />
          <br />

        </p>

        <div className="grid" style={styles.grid}>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={people} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Consumer</h3>
            <p style={styles.h4Lightcolor}>
              We support consumer brands in building trust and influencing buying decisions.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={pen} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Mobility</h3>
            <p style={styles.h4Lightcolor}>
              We help mobility brands convey innovation and future-ready thinking.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={headset} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Energy</h3>
            <p style={styles.h4Lightcolor}>
              We support energy companies in communicating sustainability and long-term impact.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={briefcase} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Retail</h3>
            <p style={styles.h4Lightcolor}>
              We help retail brands strengthen customer trust and drive consistent growth.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={gem} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>BFSI</h3>
            <p style={styles.h4Lightcolor}>
              We help BFSI brands build credibility, trust and long-term confidence.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={lighting} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Technology</h3>
            <p style={styles.h4Lightcolor}>
              We help technology companies communicate innovation with clarity.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.iconBox}>
              <img src={manufacturing} alt="" style={styles.icon}/>
            </div>
            <h3 style={styles.h4Boldcolor}>Manufacturing</h3>
            <p style={styles.h4Lightcolor}>
              We help manufacturing brands articulate strength and operational excellence.
            </p>
          </div>

          <div style={styles.moreCard}>
            <div>
              <div style={styles.moreNumber}>+4</div>
              <div>More</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}