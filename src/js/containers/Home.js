import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import Header from "../components/Header";
import Greeting from "./Greeting";
import Skills from "./Skills";
import Education from './Education';
import WorkExperience from './WorkExperience';
import NotFound from "../components/NotFound";
import Projects from "./Projects";
// import ProjectList from "./Project-list";
import Achievement from './Achievement';
import Blogs from "./Blogs";
import Profile from "./Profile";
import Footer from "../components/Footer";
import Top from "./Top";

export default class Home extends Component {
    render() {
        return (
            <Router>
                <Helmet>
                    <title>Tanmay Bhagwat</title>
                </Helmet>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Header />
                            <Greeting />
                            <Skills />
                            <Education />
                            <WorkExperience />
                            <Projects />
                            {/* <ProjectList /> */}
                            <Achievement />
                            <Blogs />
                            <Profile />

                            <Footer />
                            <Top />
                        </Route>
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