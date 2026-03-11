import Navbar from "../Components/Navbar";
import Provide from "../Components/Provide";
import Footer from "../Components/Footer";

import $style from "../styles/style";
import "../styles/responsive.css";
import "../styles/animations.css";

export default function Services() {
  return (
    <div style={$style.h4Regular}>
      <Navbar />
      <Provide />
      <Footer />
    </div>
  );
}
