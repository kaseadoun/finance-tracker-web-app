import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";

function MainLayout() {
    const [page, setPage] = useState<number>(0);

    return(
        <>
            <Header setPage={setPage} />
                {page === 0 && 
                    <Home />
                }
                {page === 1 &&
                    <About />
                }
            <Footer />
        </>
    );
}

export default MainLayout;