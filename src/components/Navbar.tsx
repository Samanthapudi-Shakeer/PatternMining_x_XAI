import React from 'react';
import { Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Introduction", path: "/" },
    { name: "Pattern Mining", path: "/pattern-mining" },
    { name: "XAI Techniques", path: "/xai-techniques" },
    { name: "XAI Algorithms", path: "/xai-algorithms" },
    { name: "Video", path: "/video" },
    { name: "Applications", path: "/applications" },
    { name: "Future", path: "/future" }
  ];

  return (
    <nav className="bg-emerald-800 shadow-lg fixed w-full z-20 top-0">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-9 w-9 text-white" />
            <span className="text-white font-semibold text-2xl">XAI Pattern Mining</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-xl font-large transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-white text-emerald-800 shadow-md font-bold'
                    : 'text-gray-200 font-semibold hover:bg-emerald-900 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

