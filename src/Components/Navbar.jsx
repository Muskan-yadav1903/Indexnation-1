import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import $style from "../styles/style";
import logo from "../assets/logo.png";
import servicesArrow from "../assets/services-arrow.svg";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  return (
    <nav className="navbar" style={$style.navbar}>

      {/* Overlay backdrop when menu is open */}
      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: 998,
            cursor: "pointer",
          }}
        />
      )}

      {/* Logo */}
      <div className="logo">
        {/* <img src={logo} alt="logo" style={$style.logo} /> */}
        <Link
  to="/"
  onClick={() => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <img src={logo} alt="logo" style={$style.logo} />
</Link>
      </div>

      {/* Mobile Hamburger */}
      <div
        className={`hamburger ${isMenuOpen ? "open active" : ""}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul
        className={`nav-list ${isMenuOpen ? "active" : ""}`}
        style={$style.navList}
        onClick={(e) => e.stopPropagation()}
      >
        {isMenuOpen && (
          <li className="close-btn" onClick={closeMenu} style={{ cursor: "pointer", marginBottom: "80px"  }}>
            <span style={{ fontSize: "28px", color: "#ffffff" }}>✕</span>
          </li>
        )}

        <li style={$style.h4Regular}>
  <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
</li>

<li style={$style.h4Regular}>
  <Link to="/about" className="nav-link" onClick={closeMenu}>About us</Link>
</li>

<li style={$style.h4Regular}>
  <Link to="/services" className="nav-link services-link" onClick={closeMenu}>
  Our Services
  <img src={servicesArrow} alt="arrow" className="services-arrow" />
</Link>
</li>

<li style={$style.h4Regular}>
  <Link to="/strategy" className="nav-link" onClick={closeMenu}>Strategy & Planning</Link>
</li>

<li style={$style.h4Regular}>
  <Link to="/publications" className="nav-link" onClick={closeMenu}>Our Publications</Link>
</li>

<li style={$style.h4Regular}>
  <Link to="/blogs" className="nav-link" onClick={closeMenu}>Blogs</Link>
</li>

        <li style={$style.h4Regular}>
          {/* <button style={$style.primaryButton} onClick={closeMenu}> */}
          <button style={$style.primaryButton} className="contact-btn" onClick={closeMenu}>
            Contact Us
          </button>
        </li>

      </ul>
    </nav>
  );
}
