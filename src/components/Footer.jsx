import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3>Sound of the Future</h3>

      <p>
        Protect hearing. Share stories. Build change.
      </p>

      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/impact">Impact</Link>
        <Link to="/get-involved">Get Involved</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate">Donate</Link>
      </div>

      <p>© 2026 Sound of the Future</p>
    </footer>
  );
}

export default Footer;