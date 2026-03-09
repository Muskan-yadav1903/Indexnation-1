import React from "react";
import $style from "../styles/style";

import qrCode from "../assets/qr.png";
import qrBg from "../assets/qr-bg.png";

export default function Contact() {
  return (
    <section className="contact-section" style={$style.contactSection}>
      <div className="contact-container" style={$style.contactContainer}>
        <h2 className="contact-title" style={$style.DisplayTextcolor}>Ready To Work With Us?</h2>
        <p className="contact-subtitle" style={$style.contactSubtitle}>
          Let's collaborate or have a question? Contact Us
        </p>

        <div className="contact-card" style={$style.contactCard}>
          <div className="contact-form-side" style={$style.contactFormSide}>
            <h3 className="contact-form-title" style={$style.h2Boldcolor}>Let's connect constellations</h3>

            <p className="contact-text" style={$style.contactText}>
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            <div className="contact-name-row" style={$style.nameRow}>
              <input className="contact-input-half" placeholder="Last Name" style={$style.inputHalf} />
              <input className="contact-input-half" placeholder="First Name" style={$style.inputHalf} />
            </div>

            <input className="contact-input-full" placeholder="Email" style={$style.inputFull} />
            <input className="contact-input-full" placeholder="Phone Number" style={$style.inputFull} />

            <textarea className="contact-textarea" placeholder="Message" rows="4" style={$style.textarea} />

            <button className="contact-submit-btn" style={$style.submitBtn}>Submit</button>
          </div>

          <div className="contact-qr-wrapper" style={$style.qrWrapper}>
            <img className="contact-qr-bg" src={qrBg} alt="background" style={$style.qrBackground} />
            <img className="contact-qr-code" src={qrCode} alt="qr code" style={$style.qrCode} />

            <h4 className="contact-qr-title" style={$style.qrTitle}>Connect with us</h4>
            <p className="contact-qr-text" style={$style.qrText}>Scan the QR Code to chat</p>
          </div>
        </div>
      </div>
    </section>
  );
}
