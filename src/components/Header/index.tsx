// import styles from "./header.module.css";
import NavItem from "./NavigationItem";

function Header() {
    return(
        <header className="bg-gray-800">
            <nav className="mx-auto flex items-center justify-between">
                <ul>
                    <NavItem link="/" title="Home" />
                    <NavItem link="/about" title="About" />
                </ul>
            </nav>
        </header>
    );
}

export default Header;