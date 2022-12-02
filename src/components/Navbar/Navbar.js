import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ scrollToSection, navLinks }) => {
  const { about, projects, contact } = navLinks;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav>
      <a href="">
        <img src="/images/logo.png" alt="logo" />
      </a>
      <ul
        className="nav-links"
        style={isSidebarOpen ? { right: 0 } : { right: "-40rem" }}
      >
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li onClick={() => scrollToSection(contact)}>Contact</li>
        <FaTimes className="close-icon" onClick={closeSidebar} />
      </ul>
      {isSidebarOpen || (
        <GiHamburgerMenu className="menu-icon" onClick={openSidebar} />
      )}
    </nav>
  );
};

export default Navbar;
