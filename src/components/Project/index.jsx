import React, { useState, useMemo } from "react";
import "./project.css";
import { projects } from "../../data";
import ProjectNavigation from "../ProjectNavigation";

const Project = () => {
  const [active, setActive] = useState(projects);

  // استخدام useMemo لتحسين الأداء وعدم إعادة الحساب غير الضرورية
  const tabs = useMemo(() => {
    const uniqueTabs = ["All"];
    projects.forEach((item) => {
      if (!uniqueTabs.includes(item.category)) {
        uniqueTabs.push(item.category);
      }
    });
    return uniqueTabs;
  }, []);

  const setProject = (value) => {
    if (value === "All") {
      setActive(projects);
    } else {
      setActive(projects.filter((item) => item.category === value));
    }
  };

  return (
    <section id="project">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">Projects</span>
        </h1>
        <ProjectNavigation tabs={tabs} onChange={setProject} />
        <div className="projects__container">
          {active.map((project, index) => (
            <div className="project__card" key={index}>
              <div className="image__container">
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className="name">{project.title}</h3>
              <p className="text__muted description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
