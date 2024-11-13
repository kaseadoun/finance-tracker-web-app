import { publicRoutes } from "../../app/routes/PublicRoutes";
import NavItem from "./NavigationItem";

export function NavigationBrand() {
    return (
        <div className="w-3/4">
            <h1 className="mx-10">RainyDay</h1>
        </div>
    );
}

export function Navigation({ isLandingPage }: { isLandingPage: boolean }) {
    return (
        <ul className={`flex items-center justify-around w-1/4 mx-10`}>
            {publicRoutes.children.map(navItem => {
                console.log(navItem);
                return <NavItem 
                    key={navItem.path} 
                    link={navItem.path} 
                    title={navItem.title} 
                    isLandingPage={ isLandingPage }
                />;
            })}
        </ul>
    );
}