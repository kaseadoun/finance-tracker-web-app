import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./routes/PublicRoutes";

function App() {

  const router = createBrowserRouter([
    publicRoutes
  ])

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
