import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = ({ activeTab }) => {
    return <header>
        <Logo />
        <Navigation activeTab={activeTab}/>
    </header>
}

export default Header;