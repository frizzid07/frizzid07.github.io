import React from "react";
import "../../css/Skills.css";
import SoftwareSkills from "../components/SoftwareSkills";
import { skillsSection } from "../Portfolio";
import happycoder from "../../assets/images/happy-coder.png"
import {Fade} from "react-reveal";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
            <div className="skills-text-div">
                <h1 className="skills-heading">{skillsSection.title} </h1>
                <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
                <SoftwareSkills />
            </div>
        </Fade>
        <Fade right duration={1000}>
            <div className="skills-image-div">
                <img alt="Coding Man" src={happycoder}></img>
                <a href='https://www.freepik.com/vectors/business' className="credits">Business vector created by syarifahbrit - www.freepik.com</a>
            </div>
        </Fade>
      </div>
    </div>
  );
}
