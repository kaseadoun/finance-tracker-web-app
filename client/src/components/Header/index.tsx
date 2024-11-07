// import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { NavigationBrand, NavigationPageSide } from "./NavigationSections";

function Header() {
    const [navigationBg, setNavigationBg] = useState(false);

    function changeNavigationBg() {
        if (window.scrollY >= 800) {
            setNavigationBg(true);
        } else {
            setNavigationBg(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavigationBg);

        return () => {
            window.removeEventListener('scroll', changeNavigationBg);
        }
    }, []);
    //bg-pastel-yellow
    return (
        <header className={`fixed top-0 w-full p-3 filter transition-all duration-500 ${navigationBg ? 'bg-pastel-yellow text-black drop-shadow-md' : 'bg-rainy-cloud-grey text-white'}`}>
            <nav className="flex space-between w-full">
                <NavigationBrand />
                <NavigationPageSide />
            </nav>
        </header>
    );
}

export default Header;