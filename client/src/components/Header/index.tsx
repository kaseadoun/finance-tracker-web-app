// import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { NavigationBrand, Navigation } from "./NavigationSections";

function Header() {
    const [isLandingPage, setIsLandingPage] = useState<boolean>(true);

    function changeNavigationBg() {
        if (window.scrollY >= 750) {
            setIsLandingPage(false);
        } else {
            setIsLandingPage(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavigationBg);

        return () => {
            window.removeEventListener('scroll', changeNavigationBg);
        }
    }, []);
    
    return (
        <header className={`fixed top-0 w-full p-3 filter transition-all duration-500 ${isLandingPage ? 'bg-rainy-cloud-grey text-white' : 'bg-pastel-yellow text-black drop-shadow-md'}`}>
            <nav className="flex space-between w-full">
                <NavigationBrand />
                <Navigation
                    isLandingPage={ isLandingPage }
                />
            </nav>
        </header>
    );
}

export default Header;