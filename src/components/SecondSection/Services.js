import './styles.css';
import ServiceSectionHeader from "../ServiceSectionHeader/ServiceSectionHeader";
import ServiceItem from "./ServiceItem/ServiceItem";

const Services = () => {
    return (
        <div className='services' id='service'>
            <div className="service-container">
                <ServiceSectionHeader
                    headerButton='Показать все услуги'
                    headerName='Наши услуги'
                    headerText='Комплексный подход к вашему вопросу, своевременная правовую помощь,
                 представление интересов во всех судебных инстанциях.'
                />
                <div className="services-content">
                    <ServiceItem  serviceIcon='./icons/service-icon-1.png' serviceLabel='Банкротство и ликвидация' serviceParagraph='Полное прекращение существования юридического
                     лица с сохранением легальности всей предыдущей деятельности' />
                    <ServiceItem serviceIcon='./icons/service-icon-2.png' serviceLabel='Адвокатское сопровождение' serviceParagraph='Мы гарантируем полное профессиональное
                    обслуживание клиентов в заявленных сферах деятельности и соблюдение конфиденциальности' />
                    <ServiceItem serviceIcon='./icons/service-icon-3.png' serviceLabel='Налоговый аудит' serviceParagraph='Налоговый аудит проводят перед проведением
                    налоговых проверок; при оценке возможных налоговых рисков; при оптимизации налогообложения.' />
                </div>
            </div>
        </div>
    );

}

export default Services;