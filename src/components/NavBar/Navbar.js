import './styles.css';
import NavBarHeader from "./Navbar-header/Navbar-header";
import NavbarMain from "./Navbar-main/Navbar-main";

const Navbar = () => {
    return (
        <div id='main' className='navBar'>
            <NavBarHeader />
            <NavbarMain />
        </div>
    );
}

export default Navbar;