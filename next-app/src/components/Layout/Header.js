import { useState, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const useDisableBodyScroll = (open) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open])
} 

const Header = ({ activeTab }) => {
    const [showNavigation, setShowNavigation] = useState(false);

    const handleHamburgerClick = () => {
        setShowNavigation((prevState) => !prevState);
    }

    const closeMenu = () => {
        setShowNavigation(false);
    }

    useDisableBodyScroll(showNavigation);

    return <header>
        <div onClick={() => setShowNavigation(false)} className="logo"><Logo /></div>
        <Navigation activeTab={activeTab} show={showNavigation} closeMenu={closeMenu}/>
        <HamburgerMenu onClick={handleHamburgerClick} showNavigation={showNavigation}/>
    </header>
}

export default Header;