// import React from "react";
// import Navbar from "../Components/Navbar";

// export default function TermsConditions() {
//   return (
//     <>
//       {/* Navbar */}
//       <Navbar />

//       {/* Terms Page */}
//       <div
//         style={{
//           background: "#020A4E",
//           minHeight: "100vh",
//           padding: "120px 20px",
//           color: "white",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "900px",
//             margin: "auto",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "70px",
//               textAlign: "center",
//               marginBottom: "60px",
//             }}
//           >
//             Terms & Conditions
//           </h1>

//           <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
//             By using our site and/or purchasing something from us, you engage
//             in our service and agree to be bound by the following terms and
//             conditions.
//           </p>

//           <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
//             Please read these Terms of Service carefully before accessing or
//             using our website. By accessing or using any part of the site,
//             you agree to be bound by these Terms.
//           </p>

//           <p style={{ lineHeight: "1.8" }}>
//             The Services are only intended for persons over the age of 18.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import $style from "../styles/style";
import "../styles/responsive.css";
import "../styles/animations.css";

export default function TermsConditions() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Terms Page */}
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          background: "#020A4E",
          minHeight: "100vh",
          padding: "120px 20px",
        //   marginTop: "80px",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "70px",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            Terms & Conditions
          </h1>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "20px" }}>
            <strong style={{fontFamily: "Inter, sans-serif"}}>Index Nation Terms & Conditions</strong>
          </p>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            These Terms and Conditions govern the use of the Index Nation
            website and services. By accessing or using this website, you
            agree to the following terms.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Use of Website</h3>

          <p style={{ fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            The content provided on this website is intended for informational
            purposes related to Index Nation’s services, insights and
            communication expertise.
          </p>

          <p style={{ fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            Visitors agree to use the website responsibly and refrain from any
            activity that may disrupt, damage or compromise its functionality.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Intellectual Property</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            All content on this website — including text, graphics, branding,
            design and strategic frameworks — is the intellectual property of
            Index Nation unless otherwise stated.
          </p>

          <p style={{ fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            Content may not be reproduced, distributed or used commercially
            without prior written permission.
          </p>

          <h3 style={{ fontFamily: "Inter, sans-serif" ,marginBottom: "15px" }}>Professional Information</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            The materials on this website reflect Index Nation’s perspectives
            on communication strategy, reputation architecture and market
            influence.
          </p>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            While we strive for accuracy and clarity, the information provided
            should not be interpreted as financial, legal or investment advice.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Limitation of Liability</h3>

          <p style={{ fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            Index Nation is not responsible for any direct or indirect losses
            arising from the use of this website or reliance on its content.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>External Platforms</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            Our website may reference or link to external platforms. Index
            Nation does not control or endorse the content, policies or
            reliability of those external websites.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Changes to Terms</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            These Terms and Conditions may be updated periodically to reflect
            operational improvements or legal requirements. Continued use of
            the website implies acceptance of any updates.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Governing Principles</h3>

          <p style={{ fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            Index Nation operates with a commitment to integrity in
            communication, discipline in narrative and responsibility toward
            the trust placed in us by clients and partners.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Contact</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8" }}>
            For questions regarding these terms:
            <br />
            <strong style={{fontFamily: "Inter, sans-serif"}}>Index Nation</strong>
            <br />
            contact@indexnation.ai
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}