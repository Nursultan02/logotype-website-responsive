import './styles.css';
import LinkedButton from "../../LinkedButton/LinkedButton";

const ConsultationForm = () => {
    return (
        <div className='consultationForm'>
            <form>
                <div className='main-form'>
                    <label>E-mail</label>
                    <input type="text"/>
                    <label>Контактный Телефон</label>
                    <input type="text"/>
                    <label>ФИО</label>
                    <input type="text"/>
                </div>
                <div className='form-text-area'>
                    <label>Сообщение</label>
                    <textarea />
                    <div className='form-btn'>
                        <LinkedButton buttonName='Получить консультатцию' isBlack='True'/>
                    </div>
                </div>
                <div className='jaiBlock'/>

            </form>
        </div>
    );
}

export default ConsultationForm;