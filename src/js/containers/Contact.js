import React from "react";
import "../../css/Contact.css";
import SocialMedia from "../components/SocialMedia";
import {contactInfo} from "../Portfolio";
import { Fade } from "react-reveal";
import profile from "../../assets/images/Profile-Shot.jpg";
import linktree from "../../assets/images/Linktree-QR.png";

export default function Contact() {
    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{contactInfo.title}</h1>
                    <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

                    <div className="contact-text-div">
                        <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a>
                        <br/><br/>
                        <a className="contact-detail-email"
                           href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                    <img alt="Profile" src={profile} className="profile-image"></img>
                    <img alt="Linktree QR" title="LinkTree QR Code" src={linktree} className="linktree-image"></img>
                </div>
            </div>
        </div>
        </Fade>
    );
}