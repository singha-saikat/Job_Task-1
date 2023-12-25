import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Updated import statement
import useAuth from "../../../../Hook/UseAuth";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize useHistory

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/"); // Redirect to the landing page
  };

  return (
    <nav className="p-4 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        <div className="logo flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold">Logo</h1>
        </div>
        <div className="nav-links flex gap-4 mt-4 sm:mt-0">
          <NavLink
            to="/"
            className="hover:text-blue-200"
            activeClassName="font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="hover:text-blue-200"
            activeClassName="font-bold"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/audience"
            className="hover:text-blue-200"
            activeClassName="font-bold"
          >
            Audience 
          </NavLink>
          <NavLink
            to="/settings"
            className="hover:text-blue-200"
            activeClassName="font-bold"
          >
            Settings
          </NavLink>
          
          {/* User Dropdown */}
          {user?.email && (
            <div className="dropdown dropdown-end ml-4" ref={dropdownRef}>
              <label
                tabIndex={0}
                className="cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                 <img
                src={user.photoURL}
                alt="User"
                className="h-10 w-10 rounded-full object-cover"
              />
              </label>
              {isDropdownOpen && (
                <div
                  tabIndex={0}
                  className="dropdown-content z-10 menu p-2 shadow bg-white rounded-box w-52 mt-2"
                >
                  <p className="text-slate-800 text-center mb-2">
                    User Name: {user.displayName}
                  </p>
                  <div
                    onClick={handleLogout} 
                    className="cursor-pointer text-red-500 font-bold px-4 py-2 hover:bg-base-300 rounded-lg"
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
