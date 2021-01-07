import './styles.css';
import ServiceSectionHeader from "../ServiceSectionHeader/ServiceSectionHeader";
import ConsultationForm from "./ConsultationForm/ConsultationForm";

const ConsultationPage = () => {
    return (
        <div id='consultation' className='consultationPage'>
            <div className="consultationPage-container">
                <ServiceSectionHeader
                    needButton='false'
                    headerName='Получить Консультацию'
                    headerText='Комплексный подход к вашему вопросу, своевременная правовую помощь,
                     представление интересов во всех судебных инстанциях.'
                />
                <ConsultationForm/>

                <img className='girl-bg' src="./img/girl-bg.png" alt="girl"/>
            </div>
        </div>
    );
}

export default ConsultationPage;