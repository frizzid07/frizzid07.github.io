import React from "react";
import "../../css/Projects.css";
import "../../css/AchievementCard.css";
import "../../css/Achievement.css";
import AchievementCard from "../components/AchievementCard";
import Button from "../components/Button";
import { bigProjects, socialMediaLinks } from "../Portfolio";
import { Fade } from "react-reveal";


export default function ProjectList() {
    if(bigProjects.viewProjects) {
      return (
            <div id="bigProjects">
                <Fade bottom duration={1000} distance="20px">
                <div className="main" id="achievements">
                    <div className="achievement-main-div">
                        <div className="achievement-header">
                            <h1 className="heading achievement-heading">{bigProjects.title}</h1>
                            <p className="subTitle achievement-subtitle">{bigProjects.subtitle}</p>
                        </div>
                        <div className="achievement-cards-div">
                            {bigProjects.projects.map(card => {
                                return (
                                <AchievementCard
                                    cardInfo={{
                                    title: card.title,
                                    description: card.description,
                                    image: card.image,
                                    footer: card.footerLink
                                    }}
                                />
                                );
                            })}
                        </div>
                    </div>
                    <Button text={"More Projects"} className="project-button" href={socialMediaLinks.githubrepo} newTab={true} />
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}