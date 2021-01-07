import './styles.css';
import LinkedButton from "../LinkedButton/LinkedButton";

const FirstSection = () => {
    return (
        <div className='firstSection'>
            <div className="firstSection-container">
                <div className="main-content">
                    <h1>
                        КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ
                    </h1>
                    <p>Полное прекращение существования юридического лица с сохранением легальности всей предыдущей
                        деятельности.</p>
                    <LinkedButton buttonName='Оставить заявку' />
                </div>
            </div>
        </div>
    );
}

export default FirstSection;