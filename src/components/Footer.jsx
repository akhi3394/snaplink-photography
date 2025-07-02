import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className=" mb-10">
      <div className="container-responsive">
        <div className="flex justify-center items-center flex-wrap gap-5">
          {/* Text */}
          <p className="text-gray-400 text-sm text-center">
            Copyright © 2025 Company-Name. All Rights Reserved
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center hover:scale-110 transition"
            >
              <FaInstagram className="text-white w-5 h-5" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition"
            >
              <FaYoutube className="text-white w-5 h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition"
            >
              <FaWhatsapp className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
