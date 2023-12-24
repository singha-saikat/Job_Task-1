import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask";

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
            {
                path:'/signUp',
                element: <SignUp/>,
            },
        ]

    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/addTask',
            element: <AddTask/>
          },
          
  
        ]
      }

])
export default routes;