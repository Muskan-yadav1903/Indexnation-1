import $style from "../styles/style";

export default function InfluenceIndex() {
  return (
    <section style={$style.influenceSection}>
      
      {/* Top Content */}
      <div style={$style.influenceHeader}>
        <div>
          <p style={$style.h4Regularcolor}>Our Strategic Edge</p>
          <h2 style={$style.DisplayTextcolor}>The Influence Index</h2>
        </div>

        <div style={$style.influenceTextBox}>
          <p style={$style.h4Regularcolor}>
            A proprietary measurement model that evaluates real influence
            and tracks its movement over time across:
          </p>

          <p style={$style.influenceHighlight}>
            Measured influence is manageable influence.
          </p>
        </div>
      </div>

      {/* Cards Container */}
      <div style={$style.influenceCardBox}>

        {/* Row 1 */}
        <div style={$style.influenceCard}>
          <div style={$style.icon}></div>
          <h3>Analyst perception</h3>
          <p style={$style.h4Light}>
            Shaping how analysts interpret performance, strategy,
            and long-term value.
          </p>
        </div>

        <div style={$style.influenceCard}>
          <div style={$style.icon}></div>
          <h3>Shareholder confidence</h3>
          <p>
            Building sustained investor confidence through
            clarity and consistency.
          </p>
        </div>

        <div style={$style.influenceCard}>
          <div style={$style.icon}></div>
          <h3>Media sentiment</h3>
          <p>
            Influencing media narratives to reflect credibility
            and strategic intent.
          </p>
        </div>

        {/* Row 2 */}

        <div style={$style.influenceCard}>
          <div style={$style.icon}></div>
          <h3>Reputation risk defence</h3>
          <p>
            Protecting brand reputation through proactive
            risk and issue management.
          </p>
        </div>

        <div style={$style.influenceCard}>
          <div style={$style.icon}></div>
          <h3>Leadership authority</h3>
          <p>
            Positioning leadership as credible, trusted,
            and forward-thinking voices.
          </p>
        </div>

        <div style={$style.influenceCard}>
          <div style={$style.icon}></div>
          <h3>Public trust signals</h3>
          <p>
            Reinforcing trust through transparent and
            dependable communication.
          </p>
        </div>

      </div>
    </section>
  );
}