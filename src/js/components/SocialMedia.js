import React from "react";
import "../../css/SocialMedia.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMediaLinks } from "../Portfolio";

library.add(fab);

export default function socialMedia() {
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="i" icon={["fab", "linkedin-in"]} />
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="i" icon={["fab", "google"]} />
      </a>
      :
      null}

      {socialMediaLinks.gitlab ?
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab" target="_blank" rel="noreferrer">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

      {socialMediaLinks.facebook ?
      <a href={socialMediaLinks.facebook} className="icon-button facebook" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      :
      null}

       {socialMediaLinks.instagram ?
      <a href={socialMediaLinks.instagram} className="icon-button instagram" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.twitter ?
      <a href={socialMediaLinks.twitter} className="icon-button twitter" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="i" icon={["fab", "twitter"]} />
      </a>
      :
      null}

      {socialMediaLinks.medium ? 
      (<a href={socialMediaLinks.medium} className="icon-button medium" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="i" icon={["fab", "medium"]} />
      </a>)
      :
      null}

      {socialMediaLinks.stackoverflow ? 
      (<a href={socialMediaLinks.stackoverflow} className="icon-button stack-overflow" target="_blank" rel="noreferrer">
        <i className="fab fa-stack-overflow"></i>
        <span></span>
      </a>)
      :
      null}

    </div>
  );
}