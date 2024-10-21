// import styles from "./header.module.css";
import { NavigationBrand, NavigationPageSide, NavigationAuthSide } from "./NavigationSections";

function Header() {
    return (
        <div>
            <header className="bg-pastel-yellow w-full p-3">
                <nav className="flex space-between">
                    <NavigationBrand />
                    <div className="flex items-center justify-between w-1/2">
                        <NavigationPageSide />
                        <NavigationAuthSide />
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;