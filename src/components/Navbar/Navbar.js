import React from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, navLinks }) => {
  const { about, projects, contact } = navLinks;
  return (
    <nav>
      <a href="">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <ul className="nav-links">
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
