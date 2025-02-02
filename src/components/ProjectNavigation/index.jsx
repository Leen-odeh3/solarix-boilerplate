import React, { useEffect, useState } from "react";
import "./ProjectNavigation.css";

const ProjectNavigation = ({ tabs, onChange }) => {
  const [active, setActive] = useState("All");

  useEffect(() => {
    onChange(active);
  }, [active, onChange]);

  return (
    <section className="project__navigation">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={active === tab ? "active" : ""}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </section>
  );
};

export default ProjectNavigation;
