import { Outlet, useLocation } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

function PublicLayout() {
    const location = useLocation();
    const HideHeaderPaths = ['/login', '/signup', '/dashboard'];

    const shouldHideHeader = HideHeaderPaths.includes(location.pathname);
        
    return(
        <div className="w-full">
            {!shouldHideHeader && <Header />}
            <main className="h-4/5">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default PublicLayout;