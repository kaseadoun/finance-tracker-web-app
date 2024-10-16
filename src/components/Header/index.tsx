// import styles from "./header.module.css";
import { NavigationBrand, NavigationPageSide, NavigationAuthSide } from "./NavigationSections";

function Header() {
    return (
        <header className="bg-gray-800 w-100vw h-50vh">
            <nav className="flex space-between">
                <NavigationBrand />
                <div className="flex items-center justify-between w-50vw">
                    <NavigationPageSide />
                    <NavigationAuthSide />
                </div>
            </nav>
        </header>
    );
}

export default Header;