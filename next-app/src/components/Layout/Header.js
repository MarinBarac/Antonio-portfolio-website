import { useState } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = ({ activeTab }) => {
    const [showNavigation, setShowNavigation] = useState(false);

    const handleHamburgerClick = () => {
        setShowNavigation((prevState) => !prevState);
    }

    const closeMenu = () => {
        setShowNavigation(false);
    }

    return <header>
        <Logo />
        <Navigation activeTab={activeTab} show={showNavigation} closeMenu={closeMenu}/>
        <HamburgerMenu onClick={handleHamburgerClick} showNavigation={showNavigation}/>
    </header>
}

export default Header;