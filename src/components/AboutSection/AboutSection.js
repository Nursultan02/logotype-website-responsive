import './styles.css';
import LinkedButton from "../LinkedButton/LinkedButton";

const AboutSection = () => {
    return (
        <div id='about' className='aboutSection'>
            <div className="aboutSection-container">
                <div>
                    <h1>О компаний</h1>
                    <p>Компания специализируется на оказании услуг в сфере корпоративного права, налогового консалтинга,
                        представительства в судах, ликвидации и банкротства предприятий. На сегодняшний день, коллектив
                        компании объединяет
                        высокопрофессиональных экспертов имеющих </p>
                    <div className='about-btn'><LinkedButton buttonName='Узнать больше' /></div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;