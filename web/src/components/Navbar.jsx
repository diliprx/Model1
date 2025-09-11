import React from 'react';
import { Menu, X } from 'lucide-react';
import { images, menuItems } from '../assets/assets';

const Navbar = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-white text-xl font-bold">
              <img src={images.logo} alt="Jharkhand Tourism" />
            </div>
            {/* <div className="ml-4 text-white text-sm hidden md:block">
              Government of Jharkhand
            </div> */}
          </div>
          
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`text-black hover:text-red-400 cursor-pointer bg-blue-300 rounded-xl px-4 py-2 transition-colors ${
                  currentPage === item.page ? 'text-gray-700' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cyan-600 rounded-lg p-4 mb-4">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-black hover:text-lime-800 transition-colors ${
                  currentPage === item.page ? 'text-black-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;