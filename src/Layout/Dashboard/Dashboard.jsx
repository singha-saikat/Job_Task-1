import { FaHome, FaTasks } from "react-icons/fa";
import { TbAlignBoxBottomLeft } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth";

const Dashboard = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="md:w-64 w-full bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800 p-5 md:block hidden">
          <div className="mb-10">
            <div className="text-2xl font-bold text-center mb-2">Dashboard</div>
            <div className="flex items-center space-x-3 mt-4 mb-6">
              <img
                src={user.photoURL}
                alt="User"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-lg font-semibold">{user.displayName}</span>
            </div>
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
                <FaTasks className="mr-3" />
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/taskManagement"
                className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
              >
                <TbAlignBoxBottomLeft className="mr-3" /> Task Management
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-10 bg-gray-100">
          <Outlet />
        </div>
        <div className="md:hidden  w-full bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800 p-5">
          <div className="flex  flex-col-reverse md:inline">
            
            <div className="flex items-center space-x-3 mt-4 mb-6">
              <div className="text-2xl font-bold text-center mb-2">
                Dashboard
              </div>
              <img
                src={user.photoURL}
                alt="User"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-lg font-semibold">{user.displayName}</span>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    exact
                    to="/"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                    activeClassName="bg-blue-300"
                  >
                    <FaHome className="mr-3" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addTask"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                    activeClassName="bg-blue-300"
                  >
                    <FaTasks className="mr-3" />
                    Add Task
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/taskManagement"
                    className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
                    activeClassName="bg-blue-300"
                  >
                    <TbAlignBoxBottomLeft className="mr-3" /> Task Management
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
