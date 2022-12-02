import React from "react";
import "./SocialIcons.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/sezer-u%C5%9Fak-36269324b/"
        target="_blank"
      >
        <div className="icon-container">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://github.com/sezerusak" target="_blank">
        <div className="icon-container">
          <FaGithub />
        </div>
      </a>
      <a href="mailto:usak.sezer@gmail.com" target="_blank">
        <div className="icon-container">
          <FaEnvelope />
        </div>
      </a>
    </div>
  );
};

export default SocialIcons;
