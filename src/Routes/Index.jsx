import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path:'/login',
                element: <Login />,
            },
        ]

    }

])
export default routes;