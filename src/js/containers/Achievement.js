import React from "react";
import "../../css/Achievement.css";
import AchivementCard from "../components/AchivementCard";
import { achievementSection } from "../Portfolio";
import { Fade } from "react-reveal";

export default function Achievement() {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{achievementSection.title}</h1>
          <p className="subTitle achievement-subtitle">{achievementSection.subtitle}</p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achivementsCards.map(card => {
            return (
              <AchivementCard
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  descBullets: card.descBullets,
                  image: card.image,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
