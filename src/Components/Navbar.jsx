import { Link, useLocation } from "react-router-dom";
import $style from "../styles/style";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav style={$style.navbar}>

      {/* Logo */}
      <div>
        <img src={logo} alt="logo" style={$style.logo} />
      </div>

      {/* Menu */}
      <ul style={$style.navList}>
        <li>
          <Link
            to="/"
            style={$style.h4Regular
            }
          >
            Home
          </Link>
        </li>

        <li style={$style.h4Regular}>About us</li>
        <li style={$style.h4Regular}>Our Services ▾</li>
        <li style={$style.h4Regular}>Strategy & Planning</li>
        <li style={$style.h4Regular}>Our Publications</li>
        <li style={$style.h4Regular}>Blogs</li>

        <li style={$style.h4Regular}>
          <button style={$style.primaryButton}>
            Contact Us
          </button>
        </li>

      </ul>
    </nav>
  );
}