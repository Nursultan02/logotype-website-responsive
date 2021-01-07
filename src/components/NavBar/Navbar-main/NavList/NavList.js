import './styles.css';

const NavList = () => {
    return (
        <nav className='navList'>
            <ul>
                <li className='active'><a href="#main">Главная</a></li>
                <li><a href="#about">О компании</a></li>
                <li><a href="#service">Услуги</a></li>
                <li><a href="#contacts">Контакты</a></li>
            </ul>
        </nav>
    );
}

export default NavList;