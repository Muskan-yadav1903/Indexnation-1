import React from "react";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import $style from "../styles/style";
import "../styles/responsive.css";
import "../styles/animations.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div
        style={{
            fontFamily:"Inter, sans-serif",
          background: "#020A4E",
          minHeight: "100vh",
          padding: " 120px 20px",
          color: "#ffffff",
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
            fontFamily:"Inter, sans-serif",
              fontSize: "70px",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            Privacy Policy
          </h1>

          <p style={{fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            At Index Nation, trust is not only the foundation of our work with
            clients — it is also the principle that guides how we handle
            information. This Privacy Policy explains how we collect, use,
            protect and manage the data shared with us through our website and
            services.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Information We Collect</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            When you interact with Index Nation, we may collect limited
            information necessary to provide a reliable and meaningful
            experience. This may include:
          </p>

          <ul style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px", paddingLeft: "20px" }}>
            <li style={{fontFamily: "Inter, sans-serif"}}>Name and professional details</li>
            <li style={{fontFamily: "Inter, sans-serif"}}>Email address and contact information</li>
            <li style={{fontFamily: "Inter, sans-serif"}}>Organization or company affiliation</li>
            <li style={{fontFamily: "Inter, sans-serif"}}>Information shared through contact forms or inquiries</li>
            <li style={{fontFamily: "Inter, sans-serif"}}>
              Website usage data such as device type, browser and interaction
              behaviour
            </li>
          </ul>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            This information helps us understand how visitors engage with our
            platform and how we can improve the clarity and usefulness of our
            communication.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>How We Use Information</h3>

          <p style={{ lineHeight: "1.8", marginBottom: "30px" }}>
            Information collected through our website may be used to respond to
            inquiries, provide updates about our services and insights, improve
            website functionality, and maintain secure and efficient operation
            of our platform.
          </p>

          <h3 style={{ fontFamily: "Inter, sans-serif" ,marginBottom: "15px" }}>Data Protection</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            Index Nation implements appropriate technical and organizational
            safeguards to protect information from unauthorized access, misuse,
            or disclosure. While no digital system can guarantee absolute
            security, we take practical measures to maintain data integrity and
            confidentiality.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Third-Party Services</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            Our website may use trusted third-party tools for analytics,
            hosting, and performance monitoring. These services may collect
            limited technical information necessary for website functionality
            and improvement.
          </p>

          <h3 style={{ fontFamily: "Inter, sans-serif" ,marginBottom: "15px" }}>External Links</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8", marginBottom: "30px" }}>
            The website may include links to external platforms or websites.
            Index Nation is not responsible for the privacy practices or content
            of those external sites.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Your Rights</h3>

          <p style={{ fontFamily: "Inter, sans-serif" ,lineHeight: "1.8", marginBottom: "30px" }}>
            Visitors may request access to, correction of, or removal of
            personal information shared with us by contacting our team.
          </p>

          <h3 style={{fontFamily: "Inter, sans-serif" , marginBottom: "15px" }}>Contact</h3>

          <p style={{fontFamily: "Inter, sans-serif" , lineHeight: "1.8" }}>
            For privacy-related inquiries please contact: <br />
            <strong style={{fontFamily: "Inter, sans-serif"}}>Index Nation</strong> <br />
            contact@indexnation.ai
          </p>
        </div>
      </div>
            {/* <Footer /> */}

    </>
  );
}