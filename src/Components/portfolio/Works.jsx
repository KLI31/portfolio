import WorkItems from "./WorkItems";
import { useEffect, useState } from "react";
import { projectData } from "./DataProjects";
import { projectNav } from "./DataProjects";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const newProject = projectData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="works__filter">
        {projectNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active__work" : ""
              } work__item `}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="works__container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
