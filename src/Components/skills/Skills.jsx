import Fronted from "./Fronted";
import Backend from "./Backend";
import DevOps from "./DevOps";
import "./StyleSkills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Fronted />

        <Backend />

        <DevOps />
      </div>
    </section>
  );
};

export default Skills;
