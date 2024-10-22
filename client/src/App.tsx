import PublicLayout from "./layouts/PublicLayout"
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import { publicRoutes, authRoutes } from "./routes/PublicRoutes";

function App() {

  const router = createBrowserRouter([
    publicRoutes,
    authRoutes
  ])

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
