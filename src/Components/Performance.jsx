import $style from "../styles/style";
import img1 from "../assets/performance1.png";
import img2 from "../assets/performance2.png";

export default function Performance() {
  return (
    <section style={$style.performanceSection} className="performance-section">
      <div style={$style.performanceContainer} className="performance-container">

        {/* LEFT TEXT */}
        <div style={$style.performanceLeft} className="performance-left">

          <h2 style={$style.performanceTitle}>
            Performance speaks loudly.<br/>
            Clarity makes sure it is<br/>
            heard correctly.
          </h2>

          <p style={$style.performanceText}>
            Performance on its own is not enough. Without clarity,
            even strong results can be misunderstood or overlooked.
            Clear, disciplined communication ensures that performance
            is interpreted accurately, trusted by stakeholders,
            and aligned with long-term value creation.
          </p>

          <button style={$style.primaryButton}>
            Get an Appointment →
          </button>

        </div>

        {/* RIGHT IMAGE CARD */}
        <div style={$style.performanceCard} className="performance-card">

          {/* LEFT IMAGE */}
          {/* <div style={$style.imageBoxLeft} className="imageBoxLeft"> */}
          <div className="imageBoxLeft" style={$style.imageBoxLeft}>
            <div style={$style.blueBg}></div>
            <img src={img1} alt="" style={$style.performanceImg} className="performance-img"/>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div style={$style.imageBoxRight} className="imageBoxRight"> */}
          <div className="imageBoxRight" style={$style.imageBoxRight}>
            <div style={$style.greenBg}></div>
            <img src={img2} alt="" style={$style.performanceImg} className="performance-img"/>
          </div>

        </div>

      </div>
    </section>
  );
}
