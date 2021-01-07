import './styles.css';

import { CgClose } from "react-icons/all";

const BurgerNav = (props) => {

    const classes = props.classes
    return (
        <div className={classes}>
            <CgClose onClick={props.onToggleMenu()} className='closeIcon' />
            <ul className='burgerNav-list'>
                <li onClick={props.onToggleMenu()}><a href="#main">Главная</a></li>
                <li onClick={props.onToggleMenu()}><a href="#about">О компании</a></li>
                <li onClick={props.onToggleMenu()}><a href="#service">Услуги</a></li>
                <li onClick={props.onToggleMenu()}><a href="#contacts">Контакты</a></li>
            </ul>
        </div>
    );
}

export default BurgerNav;