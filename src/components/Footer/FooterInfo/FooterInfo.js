import './styles.css';
import InfoBox from "../../NavBar/Navbar-header/InfoBox/InfoBox";

import { MdLocationOn } from 'react-icons/md';
import {BiPhone} from "react-icons/bi";
import {FiMail} from "react-icons/fi";

const FooterInfo = () => {
    return (
        <div className='footer-info'>
            <h1>Комплексное закрытие предприятия</h1>
            <p>Полное прекращение существования юридического лица с сохранением легальности всей предыдущей
                деятельности.</p>
            <div className='infoBox-btn'><InfoBox /></div>
            <div className='info-icon'><BiPhone className='header-icon' /><span>+38 (096) 309 21 45</span></div>
            <div className='info-icon'><FiMail className='header-icon'/><span>layout585@gmail.com</span></div>
            <div className='info-icon'><MdLocationOn className='header-icon'/><span>Киев, ул.Пушкина-13</span></div>
        </div>
    );
}

export default FooterInfo;