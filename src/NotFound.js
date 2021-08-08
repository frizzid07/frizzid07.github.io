import { Link } from "react-router-dom";
import image404 from "./assets/image404.jpg";
import "./App.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={image404} alt="Not Found" className="not-found-image" /><br />
            <a href="https://www.freepik.com/vectors/business" className="credits">Business vector created by pikisuperstar - www.freepik.com</a><br /><br />
            <Link to="/"><button>Back to the Home Page</button></Link>
        </div>
    );
}
 
export default NotFound;