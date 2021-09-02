import React from "react";
import "../../css/Education.css";
import {Fade} from "react-reveal";
import graduate from "../../assets/images/graduate.png";
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
            <Timeline theme={customTheme} dateFormat='ll'>
                <Container>
                    <YearContent startDate='2016/08/12' endDate='2020/10/17' />
                    <BodyContent>
                        <Section title='University of Mumbai'>
                            <Description variant='subtitle' text='B.E. in Computer Engineering @ Ramrao Adik Institute of Technology' /><br />
                            <strong><Description text='CGPA: 9.17/10 | CS Aggregate: 9.46/10' /></strong>
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
                <Container>
                    <YearContent startDate='2011/07/14' endDate='2014/04/08' />
                    <BodyContent>
                        <Section title='Sou. A. K. Joshi English Medium School'>
                            <Description variant='subtitle' text='Secondary School Certificate' /><br />
                            <strong><Description text='Score: 94.6%' /></strong>
                            <Description text='Activities: Winner @ CASTIC 2012, Homi Bhabha Exam, Dance' />
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