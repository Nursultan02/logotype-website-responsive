import './styles.css';
import {FaBriefcase} from "react-icons/fa";

const InfoBox = () => {
    return (
        <div className="second-infoBox">
            <div>
                <FaBriefcase className='second-icon' /> <a href="#consultation">Бесплатная консультация</a>
            </div>
        </div>
    );
}

export default InfoBox ;