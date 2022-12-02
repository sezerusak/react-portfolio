import React from "react";
import "./Projects.css";
import projectData from "../../projectData";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const Projects = ({ navLinks }) => {
  const { projects } = navLinks;
  return (
    <section className="projects" ref={projects}>
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => {
          const {
            id,
            title,
            description,
            link_live,
            link_code,
            img,
            img_desc,
          } = project;
          return (
            <article className="project" key={id}>
              <img src={img} alt={img_desc} />
              <div className="project-info-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link_live} target="_blank">
                  <button className="btn btn-live">Live</button>
                </a>
                <a href={link_code} target="_blank">
                  <button className="btn btn-code">Code</button>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <a
        href="https://github.com/sezerusak"
        className="btn-more"
        target="_blank"
      >
        <div className="more-container">
          <span>More Projects</span>
          <BsArrowUpRightSquareFill className="arrow-icon" />
        </div>
      </a>
    </section>
  );
};

export default Projects;
