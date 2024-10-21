import { publicRoutes, authRoutes } from "../../routes/PublicRoutes";
import NavItem from "./NavigationItem";

export function NavigationBrand() {
    return (
        <div className="w-2/5">
            <h1 className="mx-10">RainyDay</h1>
        </div>
    );
}

export function NavigationPageSide() {
    return (
        <ul className="flex w-2/5">
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
        <ul className="flex w-2/5">
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
