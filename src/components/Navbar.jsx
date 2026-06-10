import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <h1>Lebanese International University</h1>
          <p className="sub">A modern university website for students</p>
        </div>
      </header>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/admission">Admission</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Navbar;