import React from "react";
import "../../css/SoftwareSkills.css";
import {skillsSection} from "../Portfolio";
import {Icon} from '@iconify/react';

export default function SoftwareSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <Icon icon={skills.icon} />
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}