import './styles.css';

import { FiMail } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import InfoBox from "./InfoBox/InfoBox";

const NavBarHeader = () => {
    return (
        <div className="navBar-header">
            <div className="navBar-container">
                <div className="first-infoBox">
                    <div className="first-infoBox-content">
                        <div><BiPhone className='header-icon' /> +38 (096) 309 21 45</div>
                        <div><FiMail className='header-icon'/>layout585@gmail.com</div>
                    </div>
                </div>
                <InfoBox />
            </div>
        </div>
    );
}

export default NavBarHeader;