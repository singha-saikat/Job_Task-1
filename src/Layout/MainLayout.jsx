import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;