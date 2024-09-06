/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProgressBar } from 'react-bootstrap';

// Types
import { ISkill } from 'types/common';

// Jsons
import SkillsData from 'jsons/skills.json';

// Styles
import './skills.scss';

const Skills = () => {
  const techs1: any[] = SkillsData.techs_1;
  // const techs2: any[] = SkillsData.techs_2;

  const RenderSkills = (skills: ISkill[]) => {
    return skills.map((skill, index) => (
      <div key={index} className="progress">
        <span className="skill">
          {skill.name} <i className="val">{skill.rate}%</i>
        </span>
        <div className="progress-bar-wrap">
          <ProgressBar
            variant="success"
            now={skill.rate}
            label={`${skill.rate}%`}
          />
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          <div className="col-lg-6">{RenderSkills(techs1)}</div>
          {/* <div className="col-lg-6">{RenderSkills(techs2)}</div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
