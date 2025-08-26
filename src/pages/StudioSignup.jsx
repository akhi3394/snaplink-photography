import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudioBG from '../assets/StudioVersionRegistrationBG.jpg';
import Logo from '../assets/Navbar/Logo.png';
import BackIcon from '/backSvg.svg';
import Camera from '../assets/CameraContactus.png';

const StudioSignup = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/choose-signup');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${StudioBG})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Back Icon */}
      <div className="cursor-pointer z-50 fixed top-4 left-4 sm:top-6 sm:left-5" onClick={handleBack}>
        <img src={BackIcon} alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Form Container */}
      <div className="relative w-full h-screen overflow-auto flex items-center justify-center px-3 sm:px-6">
        <div
          className="
            relative w-full max-w-[950px] min-h-[85vh] 
            p-4 sm:p-8 lg:p-10 
            rounded-[20px] backdrop-blur-xl bg-white/10 border border-white/30 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
            flex flex-col items-center justify-center mt-16 sm:mt-20
          "
        >
          {/* Camera Icon */}
          <img
            src={Camera}
            alt="Camera"
            className="
              absolute -top-16 left-2 w-[160px] h-auto
              sm:-top-28 sm:left-5 sm:w-[220px]
              lg:-top-36 lg:left-[5px] lg:w-[339px] lg:h-[386px]
              object-contain z-10
            "
          />

          {/* Logo */}
          <div className="mb-4">
            <img
              src={Logo}
              alt="Snaplink Logo"
              className="w-[300px] h-[150px] sm:w-[200px] sm:h-[120px] lg:w-[300px] lg:h-[300px] object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">Registration Form</h2>
          <p className="text-xs sm:text-sm text-gray-300 text-center mb-4 sm:mb-6">(Studio Version)</p>

          {/* Form */}
          <form className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 w-full px-1 sm:px-2">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <div className="relative w-full">
              <select className="w-full px-3 py-2 sm:px-4 appearance-none rounded-md bg-white/90 text-gray-700 focus:outline-none text-sm sm:text-base">
                <option>-- Select Country --</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>

            {/* Row 2 */}
            <input
              type="text"
              placeholder="Studio Name"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <div className="relative w-full">
              <select className="w-full px-3 py-2 sm:px-4 appearance-none rounded-md bg-white/90 text-gray-700 focus:outline-none text-sm sm:text-base">
                <option>-- Select State --</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>

            {/* Row 3 */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <div className="relative w-full">
              <select className="w-full px-3 py-2 sm:px-4 appearance-none rounded-md bg-white/90 text-gray-700 focus:outline-none text-sm sm:text-base">
                <option>-- Select City --</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>

            {/* Row 4 */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Pin Code"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />

            {/* Row 5 */}
            <input
              type="password"
              placeholder="Create 4-Digits Pin"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />
            <input
              type="password"
              placeholder="Confirm 4-Digits Pin"
              className="w-full px-3 py-2 sm:px-4 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none text-sm sm:text-base"
            />
          </form>

          {/* Note */}
          <p className="text-red-500 text-xs sm:text-sm mt-3 sm:mt-4 text-center">
            Note: You're Registering For Studio Version (Photographers only)
          </p>

          {/* Submit */}
          <div className="mt-4 sm:mt-6 text-center">
            <button className="bg-[#75A9FF] hover:bg-[#5f98f0] transition text-white px-6 sm:px-10 py-2 rounded-md text-sm sm:text-lg font-medium shadow-md">
              Join Now
            </button>
          </div>

          {/* Links */}
          <p className="text-center text-gray-300 mt-4 sm:mt-6 text-xs sm:text-sm">
            Want to Register For Lab Version (Designing/Printing only)?{' '}
            <Link to="/signup/lab" className="text-blue-400 hover:underline">Join Here</Link>
          </p>
          <p className="text-center text-gray-300 mt-2 text-xs sm:text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudioSignup;
