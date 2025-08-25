import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Choose from '../assets/ChooseSignupBg.jpg';
import Camera from '/CameraSignup.svg';
import Studio from '/studioCamera.svg';
import Lab from '/LabVersion.svg';

const ChooseSignup = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Choose})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Camera Icon at Top Right */}
      <img
        src={Camera}
        alt="Camera"
        className="
          fixed top-5 right-2 w-[150px] h-auto
          sm:right-5 sm:w-[220px]
          md:right-10 md:w-[280px]
          lg:-right-[80px] lg:w-[420px] lg:h-[260px]
          xl:-right-[100px] xl:w-[500px] xl:h-[300px]
          object-contain z-50
        "
      />

      {/* Back Button */}
      <div className="cursor-pointer" onClick={handleBack}>
        <img
          src="./backSvg.svg"
          alt="Back"
          className="fixed top-6 left-5 z-50 w-6 h-6"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center w-full">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Choose Your Version
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 lg:mb-8">
            Select the version that best suits your needs
          </p>

          {/* Cards */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center">
            {/* Studio Card */}
            <Link to="/signup/studio" className=" flex justify-center">
              <div className="bg-yellow-100 bg-opacity-50 p-5 sm:p-6 rounded-lg shadow-lg w-full max-w-[280px] ">
                <img src={Studio} alt="Studio Icon" className="mx-auto mb-4 w-14 sm:w-16 lg:w-auto" />
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  Studio Version
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">
                  (Photographers Only)
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Helping photographers elevate their brand and marketing beyond traditional e-albums.
                </p>
                <button className="mt-4 w-full sm:w-auto bg-[#E6F240] text-[#01441F] px-6 sm:px-10 lg:px-14 py-2 rounded-[9px] hover:bg-yellow-600 text-sm sm:text-base">
                  Get Started
                </button>
              </div>
            </Link>

            {/* Lab Card */}
            <Link to="/signup/lab" className=" flex justify-center">
              <div className="bg-teal-100 bg-opacity-50 p-5 sm:p-6 rounded-lg shadow-lg w-full max-w-[280px] ">
                <img src={Lab} alt="Lab Icon" className="mx-auto mb-4 w-14 sm:w-16 lg:w-auto" />
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  Lab Version
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">
                  (Designing/Printing only)
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Built for labs and studios that manage e-album creation for their photographer clients.
                </p>
                <button className="mt-4 w-full sm:w-auto bg-[#40F2BD] text-[#01441F] px-6 sm:px-10 lg:px-14 py-2 rounded-[9px] hover:bg-teal-600 text-sm sm:text-base">
                  Get Started
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSignup;
