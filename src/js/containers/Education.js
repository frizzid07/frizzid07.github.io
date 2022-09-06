import React from "react";
import "../../css/Education.css";
import {Fade} from "react-reveal";
import graduate from "../../assets/images/graduate.png";
// import uci from "../../assets/images/uci-logo.jpg";
// import rait from "../../assets/images/dyp-rait.png";
// import pace from "../../assets/images/pace.png";
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';

const customTheme = {
  yearColor: '#405b73',
  lineColor: '#008080',
  dotColor: '#008080',
  borderDotColor: '#000000',
  titleColor: '#000000',
  subtitleColor: '#868e96',
  textColor: '#000000',
 };

export default function Education() {
  return (
    <div className="main" id="education">
      <div className="education-main-div">
        <Fade left duration={1000}>
        <div className="education-image-div">
          <img alt="Graduate" src={graduate}></img>
          <a href='https://www.freepik.com/vectors/school' className="credits">School vector created by macrovector - www.freepik.com</a>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="education-text-div">
            <h1 className="education-heading">Education</h1>
            
            {/* Need to implement react-vertical-timeline-component */}
            <Timeline theme={customTheme} dateFormat='ll'>
                <Container>
                    <YearContent startDate='2022/09/23' endDate='2023/12/19' />
                    <BodyContent>
                        <Section title='University of California, Irvine'>
                            <Description variant='subtitle' text="Master's Degree in Computer Science" /><br />
                            <strong><Description text='GPA: 4.0/4.0' /></strong><br />
                            <Description text="Coursework: Intro to AI, Fundamentals of Algorithms, OS" /><br />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2016/08/12' endDate='2020/11/07' />
                    <BodyContent>
                        <Section title='University of Mumbai'>
                            <Description variant='subtitle' text='B.E. in Computer Engineering @ Ramrao Adik Institute of Technology' /><br />
                            <strong><Description text='CGPA: 9.17/10 | CS Aggregate: 9.46/10' /></strong><br />
                            <Description text="Activities: Computer Society of India, Editorial Board, Research Wing, Coders' Club" /><br />
                        </Section>
                    </BodyContent>
                </Container>
                <Container>
                    <YearContent startDate='2014/07/21' endDate='2016/03/06' />
                    <BodyContent>
                        <Section title='Pace Junior Science College'>
                            <Description variant='subtitle' text='Higher Secondary Certificate, Computer Science Minor' /><br />
                            <strong><Description text='CS Score: 192/200' /></strong><br />
                        </Section>
                    </BodyContent>
                </Container>
            </Timeline>
        </div>
        </Fade>
      </div>
    </div>
  );
}