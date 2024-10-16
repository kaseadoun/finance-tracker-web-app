import PublicLayout from "../layouts/PublicLayout";
import Home from '../pages/Home';
import About from '../pages/About';

export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: 'about' , element: <About />}
    ]
}