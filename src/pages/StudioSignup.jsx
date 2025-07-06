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
      <div className="cursor-pointer z-50 fixed top-6 left-5" onClick={handleBack}>
        <img src={BackIcon} alt="Back" className="w-6 h-6" />
      </div>

      {/* Glassmorphism Form Container */}
      {/* <div className="relative z-30  w-full h-screen px-4 py-10 overflow-auto"> */}
      <div className="relative w-full h-screen overflow-auto flex items-center justify-center">
        {/* Camera Icon (Left Side) */}

        <div className="relative w-full max-w-[950px] min-h-[85vh] p-10 pt-10 rounded-[20px] backdrop-blur-xl bg-white/10 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex flex-col items-center justify-center mt-20">
          <img
            src={Camera}
            alt="Camera"
            className=" absolute -top-36 left-[5px] w-[339px] h-[386px] object-contain z-10"
          />
          {/* Logo Inside Form */}
          <div className="mb-4">
            <img src={Logo} alt="Snaplink Logo" className="w-[104px] h-[142px] object-contain" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-white text-center">Registration Form</h2>
          <p className="text-sm text-gray-300 text-center mb-6">(Studio Version)</p>

          {/* Form */}
          <form className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full px-2">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />
            <div className="relative w-full">
              <select className="w-full px-4 py-2 appearance-none rounded-md bg-white/90 text-gray-700 focus:outline-none">
                <option>-- Select Country --</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>

            {/* Row 2 */}
            <input
              type="text"
              placeholder="Studio Name"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />
            <div className="relative w-full">
              <select className="w-full px-4 py-2 appearance-none rounded-md bg-white/90 text-gray-700 focus:outline-none">
                <option>-- Select State --</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>

            {/* Row 3 */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />
            <div className="relative w-full">
              <select className="w-full px-4 py-2 appearance-none rounded-md bg-white/90 text-gray-700 focus:outline-none">
                <option>-- Select City --</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>

            {/* Row 4 */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Pin Code"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />

            {/* Row 5 */}
            <input
              type="password"
              placeholder="Create 4-Digits Pin"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm 4-Digits Pin"
              className="w-full px-4 py-2 rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none"
            />
          </form>

          {/* Note */}
          <p className="text-red-500 text-sm mt-4 text-center">
            Note: You're Registering For Studio Version (Photographers only)
          </p>

          {/* Submit */}
          <div className="mt-6 text-center">
            <button className="bg-[#75A9FF] hover:bg-[#5f98f0] transition text-white px-10 py-2 rounded-md text-lg font-medium shadow-md">
              Join Now
            </button>
          </div>

          {/* Links */}
          <p className="text-center text-gray-300 mt-6 text-sm">
            Want to Register For Lab Version (Designing/Printing only)?{' '}
            <Link to="/signup/lab" className="text-blue-400 hover:underline">Join Here</Link>
          </p>
          <p className="text-center text-gray-300 mt-2 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudioSignup;
