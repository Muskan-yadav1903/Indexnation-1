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
    <section style={$style.contactSection}>
      <div style={$style.contactContainer}>

        <h2 style={$style.DisplayTextcolor}>
          Ready To Work With Us?
        </h2>

        <p style={$style.contactSubtitle}>
          Let's collaborate or have a question? Contact Us
        </p>

        <div style={$style.contactCard}>

          <form ref={form} onSubmit={sendEmail} style={$style.contactFormSide}>

            <h3 style={$style.h2Boldcolor}>
              Let's connect constellations
            </h3>

            <p style={$style.contactText}>
              Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
            </p>

            <div style={$style.nameRow}>
              <input name="last_name" placeholder="Last Name" style={$style.inputHalf} required />
              <input name="first_name" placeholder="First Name" style={$style.inputHalf} required />
            </div>

            <input name="email" placeholder="Email" style={$style.inputFull} required />
            <input name="phone" placeholder="Phone Number" style={$style.inputFull} required />

            <textarea name="message" placeholder="Message" rows="4" style={$style.textarea} required />

            <button type="submit" style={$style.submitBtn}>
              Submit
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p style={{color:"lightgreen", marginTop:"15px"}}>
                ✅ Details sent successfully!
              </p>
            )}

          </form>

          <div style={$style.qrWrapper}>
            <img src={qrBg} alt="background" style={$style.qrBackground} />
            <img src={qrCode} alt="qr code" style={$style.qrCode} />

            <h4 style={$style.qrTitle}>Connect with us</h4>
            <p style={$style.qrText}>Scan the QR Code to chat</p>
          </div>

        </div>
      </div>
    </section>
  );
}