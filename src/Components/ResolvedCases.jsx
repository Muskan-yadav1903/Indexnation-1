import $style from "../styles/style";
import caseImg from "../assets/case.png";
import leftArrow from "../assets/expandleft.svg";
import rightArrow from "../assets/expandright.svg";
import arrow from "../assets/expand1.svg";

import "../styles/responsive.css";
import "../styles/animations.css";

export default function ResolvedCases() {
  return (
    <section className="resolved-cases-section" style={$style.casesSection}>
      <div className="resolved-cases-container" style={$style.casesContainer}>
        {/* <h2 className="resolved-cases-title" style={$style.displayText1Bold}> */}
        <h2 className="resolved-cases-title reveal resolved-title" style={$style.displayText1Bold}>
          Our Resolved Cases
        </h2>

        {/* <p className="resolved-cases-subtitle" style={$style.casesSubtitle}> */}
        <p className="resolved-cases-subtitle reveal resolved-subtitle" style={$style.casesSubtitle}>
          Real transformation measured in market respect, reach and reputation strength.
        </p>

        {/* <div className="resolved-case-card" style={$style.caseCard}> */}
        <div className="resolved-case-card reveal resolved-card" style={$style.caseCard}>
          <div className="resolved-case-left" style={$style.caseLeft}>
            <p className="resolved-case-meta" style={$style.bodyLargeLightcolor}>
              Financial - January 16, 2024
            </p>

            <h3 className="resolved-case-heading" style={$style.h2Boldcolor}>
              Financial Restructuring for a
              Growing Business Startup
            </h3>

            <p className="resolved-case-description" style={$style.bodyLargeLightcolor}>
              We helped a scaling startup realign its financial strategy,
              restore stakeholder confidence, and create a foundation for
              sustainable growth.
            </p>

           <button className="resolved-case-button case-btn" style={$style.caseButton}>

  Learn more
  <span className="case-btn-arrow">
    <img src={arrow} alt="arrow" />
  </span>

</button>
          </div>

          <div className="resolved-case-right" style={$style.caseRight}>
            <img
              // className="resolved-case-image"
                className="resolved-case-image resolved-img"
              src={caseImg}
              alt="Resolved case visual"
              style={$style.caseImage}
            />
          </div>
        </div>

        {/* <div className="resolved-slider-controls" style={$style.sliderControls}> */}
        <div className="resolved-slider-controls reveal resolved-controls" style={$style.sliderControls}>
          <img
            className="resolved-slider-arrow"
            src={leftArrow}
            alt="Previous case"
            style={$style.arrowIcon}
          />

          <div className="resolved-dots-wrapper" style={$style.dotsWrapper}>
            <span className="resolved-dot resolved-dot-active" style={$style.activeDot}></span>
            <span className="resolved-dot" style={$style.dot}></span>
            <span className="resolved-dot" style={$style.dot}></span>
            <span className="resolved-dot" style={$style.dot}></span>
          </div>

          <img
            className="resolved-slider-arrow"
            src={rightArrow}
            alt="Next case"
            style={$style.arrowIcon}
          />
        </div>
      </div>
    </section>
  );
}
