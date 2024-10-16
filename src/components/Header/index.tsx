// import styles from "./header.module.css";
import { NavigationBrand, NavigationPageSide, NavigationAuthSide } from "./NavigationSections";

function Header() {
    return (
        <header className="bg-gray-800 w-100vw h-50vh">
            <nav className="mx-auto flex items-center justify-between">
                <NavigationBrand />
                <div className="mx-auto flex items-center justify-between">
                    <NavigationPageSide />
                    <NavigationAuthSide />
                </div>
            </nav>
        </header>
    );
}

export default Header;