import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from "react";
import Header from "../components/Header";
import Greeting from "./Greeting";
import Skills from "./Skills";
import WorkExperience from './WorkExperience';
import NotFound from "../components/NotFound";
// import Skills from "./skills/Skills";
// import StackProgress from "./skillProgress/skillProgress";
// import WorkExperience from "./workExperience/WorkExperience";
// import Projects from "./projects/Projects";
// import StartupProject from "./StartupProjects/StartupProject";
// import Achievement from "./achievement/Achievement";
// import Blogs from "./blogs/Blogs";
// import Contact from "./contact/Contact";
// import Footer from "../components/footer/Footer";
// import Talks from "./talks/Talks";
// import Podcast from "./podcast/Podcast";
// import Top from "./topbutton/Top";
// import Twitter from "./twitter-embed/twitter";
// import Profile from "./profile/Profile";

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Header />
                            <Greeting />
                            <Skills />
                            <WorkExperience />
                        </Route>
                        {/* <StackProgress />
                        <WorkExperience />
                        <Projects />
                        <StartupProject />
                        <Achievement />
                        <Blogs />
                        <Talks />
                        <Profile />
                        <Footer />
                        <Top /> */}
                        <Route path="*">
                            <Header />
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}