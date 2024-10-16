import { publicRoutes, authRoutes } from "../../routes/PublicRoutes";
import NavItem from "./NavigationItem";

export function NavigationBrand() {
    return (
        <>
            <h2>Brand Symbol</h2>
        </>
    );
}

export function NavigationPageSide() {
    return (
        <ul>
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
        <ul>
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
