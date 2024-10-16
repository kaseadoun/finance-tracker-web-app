import { Outlet } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

function PublicLayout() {
    return(
        <div className="w-100vw">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default PublicLayout;