import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "../../css/Greeting.css";
import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";
import { greeting } from "../Portfolio";
import workfromhome from "../../assets/images/work-from-home.png"

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-image-div">
          <img alt="Work from Home" src={workfromhome}></img>
        </div>
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  );
}