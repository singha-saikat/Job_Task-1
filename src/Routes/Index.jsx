import { createBrowserRouter } from "react-router-dom";
import Login from "../../Login/Login";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SignUp from "../../SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask";
import TaskManagement from "../Pages/Dashboard/TaskManagement";
import BeneficiarySection from "../Pages/BeneficiarySection/BeneficiarySection";

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
            {
                path:'/audience',
                element: <BeneficiarySection/>,
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
          {
            path: '/dashboard/taskManagement',
            element: <TaskManagement/>
          },
          
  
        ]
      }

])
export default routes;