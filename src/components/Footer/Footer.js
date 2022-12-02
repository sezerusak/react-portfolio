import React from "react";
import "./Footer.css";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = ({ navLinks }) => {
  const { contact } = navLinks;
  return (
    <footer ref={contact}>
      <h2>Contact me</h2>
      <SocialIcons />
      <p>
        Copyright <span>©</span> 2022 Sezer Uşak
      </p>
    </footer>
  );
};

export default Footer;
