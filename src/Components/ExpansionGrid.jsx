import $style from "../styles/style";
import meetingImg from "../assets/expansion.png"; // image add kar lena

export default function ExpansionGrid() {
  return (
    <section style={$style.expansionSection} className="expansion-section">

      <div style={$style.expansionContainer} className="expansion-container">

        {/* Heading */}
        <h2 style={$style.DisplayTextcolor} className="expansion-title">
          The Regional-to-National <br/> Expansion Grid
        </h2>

        <p style={$style.expansionSubtitle} className="expansion-subtitle">
          A distribution architecture designed for India’s real communication
          landscape. Influence activated across language clusters, media
          corridors, industry geographies and audience communities. Powered by
          national editorial intelligence and regional storytelling strength.
        </p>

        {/* Image */}
        <div style={$style.expansionImageWrapper} className="expansion-image-wrapper">
          <img
            src={meetingImg}
            alt="Expansion Grid"
            style={$style.expansionImage}
            className="expansion-image"
          />
        </div>

      </div>

    </section>
  );
}