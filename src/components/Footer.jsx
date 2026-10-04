import { Link } from "react-router-dom";
import { links } from "../data";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link to="/" className="footer-brand">
              Sound of the Future
            </Link>
            <p>Hear today. Protect tomorrow.</p>
            <a href={links.email} className="footer-email">
              soundofthefutureofficial@gmail.com
            </a>
          </div>
          <nav aria-label="Footer navigation" className="footer-links">
            <Link to="/about">About us</Link>
            <Link to="/programs">Our work</Link>
            <Link to="/impact">Our impact</Link>
            <Link to="/get-involved">Get involved</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/donate">Donate</Link>
          </nav>
          <div className="footer-social">
            <a href={links.instagram}>Instagram ↗</a>
            <a href={links.spotify}>Podcast ↗</a>
            <a href={links.linktree}>All our links ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sound of the Future</span>
          <span>Youth-led. Community-driven.</span>
        </div>
      </div>
    </footer>
  );
}
