import { publicRoutes, authRoutes } from "../../routes/PublicRoutes";
import NavItem from "./NavigationItem";

export function NavigationBrand() {
    return (
        <div className="w-3/4">
            <h1 className="mx-10">RainyDay</h1>
        </div>
    );
}

export function NavigationPageSide() {
    return (
        <ul className="flex w-2/4 justify-around">
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
        <ul className="flex w-2/4 justify-around">
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
