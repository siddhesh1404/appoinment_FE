import React from 'react';
import { Cross } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Section - Brand and Description */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Prescripto</h2>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Middle Section - Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
              COMPANY
            </h3>
            <nav className="space-y-4">
              <a 
                href="#" 
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                About us
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Doctors
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                Privacy policy
              </a>
            </nav>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
              GET IN TOUCH
            </h3>
            <div className="space-y-4">
              <a 
                href="tel:+0-000-000-000" 
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                +0-000-000-000
              </a>
              <a 
                href="mailto:greatstackdev@gmail.com" 
                className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                greatstackdev@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Prescripto. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;