import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function TabsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* === NAVBAR DESKTOP === */}
      <div
        className="is-hidden-mobile tabs is-toggle is-centered is-boxed"
        style={{
          position: "fixed",
          backgroundColor: "rgb(0 82 146)",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgb(0 0 0)",
        }}
      >
        <ul>
          <li className={location.pathname === "/" ? "is-active" : ""}>
            <Link to="/" className="has-text-white">Home</Link>
          </li>
          <li className={location.pathname.startsWith("/startnow") ? "is-active" : ""}>
            <Link to="/startnow" className="has-text-white">Start Now</Link>
          </li>
          <li className={location.pathname === "/training" ? "is-active" : ""}>
            <Link to="/training" className="has-text-white">Training Plan</Link>
          </li>
          <li className={location.pathname === "/references" ? "is-active" : ""}>
            <Link to="/references" className="has-text-white">References</Link>
          </li>
          <li className={location.pathname === "/nutrition" ? "is-active" : ""}>
            <Link to="/nutrition" className="has-text-white">Nutrition</Link>
          </li>
          <li className={location.pathname === "/contact" ? "is-active" : ""}>
            <Link to="/contact" className="has-text-white">Contact</Link>
          </li>
        </ul>
      </div>

      {/* === NAVBAR MOBILE === */}
      <div
        className="is-hidden-tablet"
        style={{
          position: "fixed",
          backgroundColor: "rgb(0 82 146)",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem",
          borderBottom: "1px solid rgb(0 0 0)",
        }}
      >
        <div className="is-flex is-justify-content-space-between is-align-items-center">
          <span className="has-text-white has-text-weight-bold">Built by Rain</span>
          <button className="button is-small is-dark" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        {isOpen && (
          <div className="mt-3">
            <Link to="/" onClick={closeMenu} className="navbar-item has-text-white is-block py-2">Home</Link>
            <Link to="/startnow" onClick={closeMenu} className="navbar-item has-text-white is-block py-2">Start Now</Link>
            <Link to="/training" onClick={closeMenu} className="navbar-item has-text-white is-block py-2">Training Plan</Link>
            <Link to="/references" onClick={closeMenu} className="navbar-item has-text-white is-block py-2">References</Link>
            <Link to="/nutrition" onClick={closeMenu} className="navbar-item has-text-white is-block py-2">Nutrition</Link>
            <Link to="/contact" onClick={closeMenu} className="navbar-item has-text-white is-block py-2">Contact</Link>
          </div>
        )}
      </div>
    </>
  );
}
