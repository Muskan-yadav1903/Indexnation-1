import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import $style from "../styles/style";

import qrCode from "../assets/qr.png";
import qrBg from "../assets/qr-bg.png";

export default function Contact() {

  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vunji7e",
      "template_d6b2z0n",
      form.current,
      "S243wuYK3ngj0WW_d"
    )
    .then(() => {

      setSuccess(true);   // success message show karega
      form.current.reset();  // form clear karega

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <section id="contact" className="contact-section" style={$style.contactSection}>
      <div className="contact-container" style={$style.contactContainer}>

        <h2 className="contact-title" style={$style.DisplayTextcolor}>
          Ready To Work With Us?
        </h2>

        <p className="contact-subtitle" style={$style.contactSubtitle}>
          Let's collaborate or have a question? Contact Us
        </p>

        <div className="contact-card" style={$style.contactCard}>

          <form ref={form} onSubmit={sendEmail} style={$style.contactFormSide}>

            <h3 style={$style.h2Boldcolor}>
              Let's connect constellations
            </h3>

            <p style={$style.contactText}>
              Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
            </p>

            <div className="contact-name-row" style={$style.nameRow}>
              <input className="contact-input-half" name="last_name" placeholder="Last Name" style={$style.inputHalf} required />
              <input className="contact-input-half" name="first_name" placeholder="First Name" style={$style.inputHalf} required />
            </div>

            <input className="contact-input-full" name="email" placeholder="Email" style={$style.inputFull} required />
            <input className="contact-input-full" name="phone" placeholder="Phone Number" style={$style.inputFull} required />

            <textarea className="contact-textarea" name="message" placeholder="Message" rows="4" style={$style.textarea} required />

            <button className="contact-submit-btn" type="submit" style={$style.submitBtn}>
              Submit
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p style={{color:"lightgreen", marginTop:"15px"}}>
                ✅ Details sent successfully!
              </p>
            )}

          </form>

          <div className="contact-qr-wrapper" style={$style.qrWrapper}>
            <img src={qrBg} alt="background" style={$style.qrBackground} />
            <img className="contact-qr-code" src={qrCode} alt="qr code" style={$style.qrCode} />

            <h4 className="contact-qr-title" style={$style.qrTitle}>Connect with us</h4>
            <p className="contact-qr-text" style={$style.qrText}>Scan the QR Code to chat</p>
          </div>

        </div>
      </div>
    </section>
  );
}
