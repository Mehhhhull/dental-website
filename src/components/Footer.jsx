import { Hospital, PhoneCall, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 mt-10">
      <div className="container mx-auto px-4 py-10 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Clinic Info */}
        <div className="flex items-start space-x-3">
          <Hospital className="w-8 h-8 text-sky-600" />
          <div>
            <h2 className="text-xl font-bold text-sky-600 mb-1">DantVeda </h2>
            <p className="text-sm text-gray-600">
              Providing quality dental care with a smile. Your comfort is our priority.
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-sky-600 transition">Home</a></li>
            <li><a href="#services" className="hover:text-sky-600 transition">Services</a></li>
            <li><a href="#about" className="hover:text-sky-600 transition">About</a></li>
            <li><a href="#tips" className="hover:text-sky-600 transition">Tips</a></li>
            <li><a href="#book" className="hover:text-sky-600 transition">Book Appointment</a></li>
            <li><a href="#testimonials" className="hover:text-sky-600 transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <PhoneCall className="text-sky-600 w-4 h-4" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="text-sky-600 w-4 h-4" />
              <span>contact@khutkhutiyadental.com</span>
            </li>
            <li className="text-gray-600">
              123 Smile Street, Tooth City, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KhutKhutiya Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
