import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
const nav = [
  ["/about", "About us"],
  ["/programs", "Our work"],
  ["/impact", "Impact"],
  ["/get-involved", "Get involved"],
  ["/contact", "Contact"],
];
export default function Navbar() {
  const [openAt, setOpenAt] = useState(null);
  const { pathname } = useLocation();
  const open = openAt === pathname;
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header
        className="navbar"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpenAt(null);
            document.getElementById("menu-toggle")?.focus();
          }
        }}
      >
        <Link to="/" className="logo" aria-label="Sound of the Future home">
          <img
            src={logo}
            alt=""
            className="navbar-logo"
            width="48"
            height="48"
          />
          <span>
            Sound of
            <br />
            the Future
          </span>
        </Link>
        <nav
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpenAt(null)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <Link to="/donate" className="donate-button">
            Donate <span aria-hidden="true">↗</span>
          </Link>
          <button
            id="menu-toggle"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpenAt(open ? null : pathname)}
          >
            {open ? "Close" : "Menu"}{" "}
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </header>
    </>
  );
}
