import { publicRoutes, authRoutes } from "../../routes/PublicRoutes";
import NavItem from "./NavigationItem";

export function NavigationBrand() {
    return (
        <>
            <img src="../src/assets/money-icon.png"></img>
        </>
    );
}

export function NavigationPageSide() {
    return (
        <ul className="flex">
            {publicRoutes.children.map(navItem => {
                console.log(navItem);
                return <NavItem 
                    key={navItem.path} 
                    link={navItem.path} 
                    title={navItem.title} 
                />;
            })}
        </ul>
    );
}

export function NavigationAuthSide() {
    return (
        <ul className="flex">
            {authRoutes.children.map(navItem => {
                console.log(navItem);
                return <NavItem 
                    key={navItem.path} 
                    link={navItem.path} 
                    title={navItem.title} 
                />;
            })}
        </ul>
    );
}
