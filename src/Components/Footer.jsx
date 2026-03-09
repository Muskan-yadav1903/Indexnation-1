import React from "react";
import $style from "../styles/style";

import logo from "../assets/logo.png";

import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

import globe from "../assets/globe.svg";
import arrow from "../assets/arrow.svg";

export default function Footer() {
  return (
    <footer className="footer-section" style={$style.footerSection}>
      <div className="footer-container" style={$style.footerContainer}>
        <h2 className="newsletter-title" style={$style.newsletterTitle}>
          Subscribe to our newsletter for free!
        </h2>

        <div className="subscribe-box" style={$style.subscribeBox}>
          <input
            className="subscribe-input"
            type="email"
            placeholder="Enter your email"
            style={$style.subscribeInput}
          />

          <button className="subscribe-btn" style={$style.subscribeBtn}>
            Subscribe
            <img className="subscribe-arrow" src={arrow} alt="arrow" style={$style.subscribeArrow}/>
          </button>
        </div>

        <div className="footer-divider" style={$style.footerDivider}></div>

        <div className="footer-grid" style={$style.footerGrid}>
          <div className="footer-brand-col">
            <img className="footer-logo" src={logo} alt="logo" style={$style.footerLogo}/>

            <p className="footer-text" style={$style.footerText}>
              Trust speaks. Respect follows. <br/>
              Influence becomes impact.
            </p>

            <div className="social-icons" style={$style.socialIcons}>
              <div className="icon-circle" style={$style.iconCircle}>
                <img className="footer-icon" src={twitter} alt="x" style={$style.icon}/>
              </div>

              <div className="icon-circle" style={$style.iconCircle}>
                <img className="footer-icon" src={linkedin} alt="linkedin" style={$style.icon}/>
              </div>

              <div className="icon-circle" style={$style.iconCircle}>
                <img className="footer-icon" src={facebook} alt="facebook" style={$style.icon}/>
              </div>

              <div className="icon-circle" style={$style.iconCircle}>
                <img className="footer-icon" src={instagram} alt="instagram" style={$style.icon}/>
              </div>
            </div>

            <div className="language-box" style={$style.languageBox}>
              <img className="language-icon" src={globe} alt="language" style={$style.languageIcon}/>
              <span className="language-text" style={$style.languageText}>English</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading" style={$style.footerHeading}>Important Links</h4>
            <p className="footer-link" style={$style.footerLink}>Home</p>
            <p className="footer-link" style={$style.footerLink}>Our Services</p>
            <p className="footer-link" style={$style.footerLink}>Strategy & Planning</p>
            <p className="footer-link" style={$style.footerLink}>Our Publications</p>
            <p className="footer-link" style={$style.footerLink}>Blog</p>
            <p className="footer-link" style={$style.footerLink}>Contact Us</p>
          </div>

          <div className="footer-legals-col">
            <h4 className="footer-heading" style={$style.footerHeading}>Legals</h4>
            <p className="footer-link" style={$style.footerLink}>Privacy Policy</p>
            <p className="footer-link" style={$style.footerLink}>Terms & Conditions</p>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading" style={$style.footerHeading}>Contact Us</h4>
            <p className="footer-link" style={$style.footerLink}>Work With Us</p>
            <p className="footer-link" style={$style.footerLink}>contact@indexnation.ai</p>
          </div>
        </div>

        <div className="footer-bottom" style={$style.footerBottom}>
          <p className="footer-bottom-text" style={$style.footerBottomcolor}>
            Copyright 2026 IndexNation. All Rights Reserved.
          </p>

          <div className="bottom-links" style={$style.bottomLinks}>
            <span className="bottom-link-item" style={$style.bottomLinksfont}>Privacy Policy</span>
            <span className="bottom-link-item" style={$style.bottomLinksfont}>Terms of Service</span>
            <span className="bottom-link-item" style={$style.bottomLinksfont}>Whistleblower Policy</span>
            <span className="bottom-link-item" style={$style.bottomLinksfont}>Cookie policy</span>
            <span className="bottom-link-item" style={$style.bottomLinksfont}>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
