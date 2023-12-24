import { FaHome, FaTasks, FaRegComments, FaRegRegistered } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FcFeedback } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth";

const Dashboard = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading....</h1>
      </div>
    );
  }

  

  return (
    <>
      <div className="flex h-screen">
        <div className="w-64 bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800 p-5">
          <div className="mb-10">
            <div className="text-2xl font-bold mb-2">Dashboard</div>
          </div>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
              >
                <FaHome className="mr-3" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addTask"
                className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
              >
                <FaTasks  className="mr-3" />
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/professional-profile"
                className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
              >
                <FaRegComments className="mr-3" /> Profile Management
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-10 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
