import Headroom from 'react-headroom';
import "../../css/App.css";
import '../../css/Header.css';
import {greeting} from "../Portfolio";

const Header = () => {
    return (
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
                    <span className="grey-color"> &lt;</span>
                    <span className="logo-name">{greeting.username}</span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#experience">Work Experience</a>
                    </li>
                    {/* {projects.showGithubProfile === "true" && 0==1 ? 
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    : null} */}
                    <li>
                        <a href="#bigProjects">Projects</a>
                    </li>
                    <li>
                        <a href="#achievements">Achievements</a>
                    </li>
                    <li>
                        <a href="#blogs">Blogs</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;