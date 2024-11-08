import SecureLayout from "../layouts/SecureLayout";
import ErrorPage from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import Expense from "../pages/expenses/index";

export const secureRoutes = {
    path: '/',
    element: <SecureLayout />,
    children: [
        {
            path:'dashboard',
            title: "Dashboard",
            element: <Dashboard />,
            errorElement: <ErrorPage />
        },
        {
            path: 'expense',
            title: 'Expense',
            element: <Expense />
        }
    ]

}