import "./header.css"
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = () => {
    return (
        <div className="header">
            <h1 className="headerHead">Design System for React JS</h1>
            <p className="headerParagraph">Atomize React is a UI framework that helps developers collaborate with <br /> designers and build consistent user interface effortlessly</p>

            <div className="headerButton">
                <button className="btnPrimary">Get started Now</button>
                <button className="btnDefault"><FontAwesomeIcon icon={faPlayCircle}/> Watch Video</button>
            </div>
        </div>
    )
}

export default Header