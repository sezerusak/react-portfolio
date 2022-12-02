import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./Header.css";
import skills from "../../skills";

const Hero = ({ navLinks }) => {
  const { about } = navLinks;
  return (
    <header>
      <div className="snippet-info">
        <h1>Sezer Uşak</h1>
        <p>Frontend Developer based in Izmir, Turkey</p>
        <SocialIcons />
      </div>
      <div className="skills">
        {skills.map((skill) => {
          return <span className="skill">{skill}</span>;
        })}
      </div>
      <div className="about" ref={about}>
        <h2>About Me</h2>
        <br />
        <br />
        <p>
          I'm a self-taught front-end developer who has switched careers from
          civil engineering. Web development was a hobby for me at first, then I
          decided to do it professionally. I mainly work at front-end side of
          the development.
        </p>
      </div>
    </header>
  );
};

export default Hero;
