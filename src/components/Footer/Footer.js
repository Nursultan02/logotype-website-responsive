import './styles.css';
import FooterInfo from "./FooterInfo/FooterInfo";
import Map from "./Map/Map";

const Footer = () => {
    return (
        <div id='contacts' className='footer'>
            <div className="footer-container">
                <FooterInfo/>
                <Map />
            </div>
            <div className="footer-bottom">
                <h2>© 2017 Template by Anastasia Shaposhnyk. Все права защищены.</h2>
            </div>
        </div>
    );
}

export default Footer;