import './styles.css';

const ServiceSectionHeader = ({headerName, headerText, headerButton, needButton}) => {
    return (
        <div className='serviceSectionHeader'>
            <div className='service-block'>
                <div className='beauty-block'/>
                <div className="service-headerContent">
                    <h1>
                        {headerName}
                    </h1>
                    <p>
                        {headerText}
                    </p>
                </div>
            </div>

            {
                !needButton  ? (<div className="header-button">
                                {headerButton}
                            </div>)
                            : null
            }
        </div>
    );
}

export default ServiceSectionHeader;