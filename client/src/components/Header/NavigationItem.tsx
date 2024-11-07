import { Link } from 'react-router-dom';

interface NavItemProps {
    link: string;
    title: string;
}

function NavItem({ link, title }: NavItemProps) {
    return (
        <li className='navItem'>
            <Link to={link}>{ title }</Link>
        </li>
    );
}

export default NavItem;