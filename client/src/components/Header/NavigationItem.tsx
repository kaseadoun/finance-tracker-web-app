import { Link } from 'react-router-dom';

interface NavItemProps {
    link: string;
    title: string;
    isLandingPage: boolean;
}

function NavItem({ link, title, isLandingPage }: NavItemProps) {
    return (
        <li className={`navItem text-center ${isLandingPage ? "hover:bg-white" : "hover:bg-black"}`}>
            <Link to={link} className={`${isLandingPage ? "text-white navItemChildBlack" : "text-black navItemChildWhite"}`}>{ title }</Link>
        </li>
    );
}

export default NavItem;