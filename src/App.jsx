import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cursor from "./Components/Cursor";
import ScrollToTop from "./Components/ScrollToTop";
import CookieBanner from "./Components/CookieBanner";
import TermsConditions from "./Pages/TermsConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Services from "./Pages/Services";

function App() {
  return (
    <Router>
      <Cursor />
      <CookieBanner />
        <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsConditions />}/>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
