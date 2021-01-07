import './styles.css';
import { useState } from 'react';

import NavList from "./NavList/NavList";
import BurgerNav from "../../BurgerNav/BurgerNav";

import { CgMenu } from 'react-icons/cg';
import { CgClose } from "react-icons/cg";

const NavbarMain = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleBurger = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='navBar-main'>
            <div className="navBarMain-container">
                <div className="logo"><span>logo</span>type</div>
                {isMenuOpen ? (<div onClick={toggleBurger} className='menuBack'/>) : null}
                <NavList/>
                <BurgerNav onToggleMenu={() => toggleBurger}  classes={isMenuOpen ? 'burgerNav burgerToggle' : 'burgerNav'}/>
                <CgMenu onClick={toggleBurger} className='menuIcon' />
            </div>
        </div>
    );

}

export default NavbarMain;