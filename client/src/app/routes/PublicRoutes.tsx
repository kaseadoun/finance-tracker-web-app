import PublicLayout from "../layouts/PublicLayout";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ErrorPage from "../pages/Error";
// For now, authenticated pages will be in the public pages until all is setup
import Dashboard from "../pages/Dashboard";

export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            title: "Home",
            element: <Home title="Welcome to RainyDay" />,
            errorElement: <ErrorPage />
        },
        {
            path: 'about', 
            title: "About", 
            element: <About />
        }
    ],
    errorElement: <ErrorPage />
}

export const authRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        { path: 'login', title: "Login", element: <Login /> },
        { path: 'signup', title: 'Sign Up', element: <Signup /> },
        // ALL TEMPORARY PAGES
        { path: 'dashboard', title: 'Dashboard', element: <Dashboard /> }
    ],
    errorElement: <ErrorPage />
}