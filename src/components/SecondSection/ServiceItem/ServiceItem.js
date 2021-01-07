import './styles.css';
import LinkedButton from "../../LinkedButton/LinkedButton";

const ServiceItem = ({serviceIcon, serviceLabel, serviceParagraph}) => {
    return (
        <div className='serviceItem'>
            <div className='serviceItem-main'>
                <img src={serviceIcon} alt="icon"/>
                <h3>{serviceLabel}</h3>
                <p>{serviceParagraph}</p>
            </div>
            <div className='serviceItem-info'>
                <a href="#">Подробнее</a>
                <LinkedButton style={{margin: 0}} buttonName='Заказать' isBlack={true}/>
            </div>
        </div>
    );
}

export default ServiceItem;