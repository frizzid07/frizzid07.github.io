import image404 from "../../assets/images/image404.png";
import "../../css/NotFound.css";
import "../../css/Button.css";
import Button from "./Button";

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={image404} alt="Not Found" className="not-found-image" /><br />
            <a href="https://www.freepik.com/vectors/business" className="credits">Business vector created by pikisuperstar - www.freepik.com</a><br /><br />
            <Button text="Back to the Home Page" className="project-button" href="/" />
        </div>
    );
}
 
export default NotFound;