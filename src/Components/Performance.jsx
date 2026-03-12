import $style from "../styles/style";
import img1 from "../assets/performance1.png";
import img2 from "../assets/performance2.png";
import arrow from "../assets/arrow1.svg";

export default function Performance() {
  return (
    <section style={$style.performanceSection} className="performance-section">
      <div style={$style.performanceContainer} className="performance-container">

        {/* LEFT TEXT */}
        <div style={$style.performanceLeft} className="performance-left">

          {/* <h2 style={$style.performanceTitle}> */}
          <h2 style={$style.performanceTitle} className="reveal performance-title">
            Performance speaks loudly.<br/>
            Clarity makes sure it is
            heard correctly.
          </h2>

          {/* <p style={$style.performanceText}> */}
          <p style={$style.performanceText} className="reveal performance-text">
            Performance on its own is not enough. Without clarity,
            even strong results can be misunderstood or overlooked.
            Clear, disciplined communication ensures that performance
            is interpreted accurately, trusted by stakeholders,
            and aligned with long-term value creation.
          </p>

        <button style={$style.primaryButton} className="appointment-btn">

  Get an Appointment

  <span className="btn-arrow">
    <img src={arrow} alt="arrow" />
  </span>

</button>

        </div>

        {/* RIGHT IMAGE CARD */}
        {/* <div style={$style.performanceCard} className="performance-card"> */}
        <div style={$style.performanceCard} className="reveal performance-card">

          {/* LEFT IMAGE */}
          {/* <div style={$style.imageBoxLeft} className="imageBoxLeft"> */}
          <div className="imageBoxLeft" style={$style.imageBoxLeft}>
            <div className="blueBg" style={$style.blueBg}></div>
            {/* <img src={img1} alt="" style={$style.performanceImg} className="performance-img"/> */}
            <img src={img1} alt="" style={$style.performanceImg} className="performance-img float-img"/>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div style={$style.imageBoxRight} className="imageBoxRight"> */}
          <div className="imageBoxRight" style={$style.imageBoxRight}>
            <div className="greenBg" style={$style.greenBg}></div>
            {/* <img src={img2} alt="" style={$style.performanceImg} className="performance-img"/> */}
            <img src={img2} alt="" style={$style.performanceImg} className="performance-img float-img"/>
          </div>

        </div>

      </div>
    </section>
  );
}
