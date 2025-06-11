import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { name: "HOME", path: "/" },
  { name: "WARNING", path: "/warning" },
  { name: "REPORTS", path: "/reports" },
  { name: "FORECAST", path: "/forecast" },
  { name: "CONTROL PANEL", path: "/control" },
  { name: "LOGIN", path: "/login" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md fixed w-full z-10">
      <div className="text-xl font-bold">MFRS</div>
      <div className="flex flex-wrap space-x-4">
        {pages.map((page, index) => (
          <Link
            key={index}
            to={page.path}
            className="hover:text-blue-400 transition px-2"
          >
            {page.name}
          </Link>
        ))}
        <Link to="/maps" className="hover:text-blue-400 transition px-2">
          MAPS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;