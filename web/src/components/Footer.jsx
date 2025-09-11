import React from 'react';
import { footerLinks, contactInfo } from '../assets/assets';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jharkhand Tourism</h3>
            <p className="text-gray-300 text-sm">
              Discover the natural beauty and rich heritage of Jharkhand - the land of forests, waterfalls, and ancient traditions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {footerLinks.quickLinks.map((link, index) => (
                <div 
                  key={index}
                  className="cursor-pointer hover:text-green-400" 
                  onClick={() => setCurrentPage(link.toLowerCase())}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Popular Districts</h4>
            <div className="space-y-2 text-sm text-gray-300">
              {footerLinks.popularDistricts.map((district, index) => (
                <div key={index}>{district}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div>{contactInfo.phone}</div>
              <div>{contactInfo.email}</div>
              <div>Ranchi, Jharkhand</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Government of Jharkhand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;