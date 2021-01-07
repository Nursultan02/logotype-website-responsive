import './styles.css';

const LinkedButton = ({buttonName, isBlack}) => {
    return (
        <div className='main-content-button'>
            <div className='button-content'>
                <span  className={isBlack ? 'black' : null}>{buttonName}</span>
            </div>
            <div className='button-icon' >></div>
        </div>
    );
}

export default LinkedButton;