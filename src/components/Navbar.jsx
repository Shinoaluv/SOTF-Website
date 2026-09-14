import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="Sound of the Future logo"
          className="navbar-logo"
        />

        <span>Sound of the Future</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/donate" className="donate-button">
        Donate
      </Link>
    </header>
  );
}

export default Navbar;