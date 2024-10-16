import PublicLayout from "../layouts/PublicLayout";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export const publicRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        { path: '/', title: "Home", element: <Home title="Home" /> },
        { path: 'about', title: "About", element: <About /> }
    ]
}

export const authRoutes = {
    path: '/',
    element: <PublicLayout />,
    children: [
        { path: 'login', title: "Login", element: <Login /> },
        { path: 'signup', title: 'Sign Up', element: <Signup />}
    ]
}