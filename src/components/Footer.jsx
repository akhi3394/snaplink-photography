import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-light py-8 border-t border-gray-700">
      <div className="container-responsive">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Company-Name. All Rights Reserved
          </p>
          <div className="flex justify-center items-center mt-4 space-x-4">
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">Y</span>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;