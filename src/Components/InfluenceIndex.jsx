import $style from "../styles/style";

export default function InfluenceIndex() {
  return (
    <section id="influence" style={$style.influenceSection} className="influence-section">
      
      {/* Top Content */}
      <div style={$style.influenceHeader} className="influence-header">
        <div>
          {/* <p style={$style.h4Regularcolor}>Our Strategic Edge</p> */}
          <p style={$style.h4Regularcolor} className="reveal influence-subtitle">
  Our Strategic Edge
</p>
          {/* <h2 style={$style.DisplayTextcolor}>The Influence Index</h2> */}
          <h2 style={$style.DisplayTextcolor} className="reveal influence-title">
  The Influence <br /> Index
</h2>
        </div>

        <div style={$style.influenceTextBox} className="influence-text-box">
          <p style={$style.h4Regularcolor} className="reveal influence-text">
            A proprietary measurement model that evaluates real influence and tracks its movement over time across:
          </p>

          <p style={$style.influenceHighlight} className="reveal influence-highlight">
            Measured influence is manageable influence.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div style={$style.influenceCardBox} className="influence-card-box">

        {/* Row 1 */}
        {/* <div style={$style.influenceCard} className="influence-card"> */}
        <div style={$style.influenceCard} className="influence-card ">
          <div style={$style.icon2}></div>
          <h3 style={$style.influenceCard}>Analyst perception</h3>
          <p style={$style.h4Lightcolor}>
            Shaping how analysts interpret performance, strategy,
            and long-term value.
          </p>
        </div>

        {/* <div style={$style.influenceCard} className="influence-card"> */}
        <div style={$style.influenceCard} className="influence-card ">
          <div style={$style.icon2}></div>
          <h3 style={$style.influenceCard}>Shareholder confidence</h3>
          <p style={$style.h4Lightcolor}>
            Building sustained investor confidence through
            clarity and consistency.
          </p>
        </div>

        {/* <div style={$style.influenceCard} className="influence-card"> */}
        <div style={$style.influenceCard} className="influence-card">
          <div style={$style.icon2}></div>
          <h3 style={$style.influenceCard}>Media sentiment</h3>
          <p style={$style.h4Lightcolor}>
            Influencing media narratives to reflect credibility
            and strategic intent.
          </p>
        </div>

        {/* Row 2 */}

        {/* <div style={$style.influenceCard} className="influence-card"> */}
        <div style={$style.influenceCard} className="influence-card ">
          <div style={$style.icon2}></div>
          <h3 style={$style.influenceCard}>Reputation risk defence</h3>
          <p style={$style.h4Lightcolor}>
            Protecting brand reputation through proactive
            risk and issue management.
          </p>
        </div>

        {/* <div style={$style.influenceCard} className="influence-card"> */}
        <div style={$style.influenceCard} className="influence-card ">
          <div style={$style.icon2}></div>
          <h3 style={$style.influenceCard}>Leadership authority</h3>
          <p style={$style.h4Lightcolor}>
            Positioning leadership as credible, trusted,
            and forward-thinking voices.
          </p>
        </div>

        {/* <div style={$style.influenceCard} className="influence-card"> */}
        <div style={$style.influenceCard} className="influence-card ">
          <div style={$style.icon2}></div>
          <h3 style={$style.influenceCard}>Public trust signals</h3>
          <p style={$style.h4Lightcolor}>
            Reinforcing trust through transparent and
            dependable communication.
          </p>
        </div>

      </div>
    </section>
  );
}