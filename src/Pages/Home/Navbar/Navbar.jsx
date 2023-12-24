/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" p-4 bg-blue-500 text-white">
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className="logo">
        {/* Add your logo here */}
        {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-8" /> */}
        <h1 className='text-3xl font-bold '>Logo</h1>
      </div>
      <div className="nav-links flex gap-4">
        {/* NavLink components for navigation, adjust the styling as needed */}
        <NavLink to="/" className="hover:text-blue-200" activeClassName="font-bold">Home</NavLink>
        <NavLink to="/tasks" className="hover:text-blue-200" activeClassName="font-bold">Tasks</NavLink>
        <NavLink to="/team" className="hover:text-blue-200" activeClassName="font-bold">Team</NavLink>
        <NavLink to="/settings" className="hover:text-blue-200" activeClassName="font-bold">Settings</NavLink>
      </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
