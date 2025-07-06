import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Choose from '../assets/ChooseSignupBg.jpg';
import Camera from '/CameraSignup.svg';
import Logo from '../assets/Navbar/Logo.png';
import Studio from '/studioCamera.svg'
import Lab from '/LabVersion.svg'
import { ArrowBigLeft, ArrowBigRight, ArrowDownLeft } from 'lucide-react';

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
          backgroundImage: `url(${Choose})` 
          // backgroundImage: `linear-gradient(142.12deg, #230018 21.88%, #012515 97.23%), url(${Choose})`,
          // backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Camera Icon at Top Right */}
      <img
        src={Camera}
        alt="Camera"
        className="fixed top-5 -right-[100px] w-[500px] h-[300px] object-contain z-50"
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
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Version</h1>
          <p className="text-lg text-gray-300 mb-8">Select the version that best suits your needs</p>
          <div className="flex justify-center gap-8">
            <Link to="/signup/studio">
              <div className="bg-yellow-100 bg-opacity-50 p-6 rounded-lg shadow-lg w-64">
                <img src={Studio} alt="Studio Icon" className="mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white">Studio Version</h2>
                <p className="text-sm text-gray-300 mt-2">(Photographers Only)</p>
                <p className="text-sm text-gray-300 mt-1">Helping photographers elevate their brand and marketing beyond traditional e-albums.</p>
                <button className="mt-4 bg-[#E6F240] text-[#01441F] px-14 py-2 rounded-[9px] hover:bg-yellow-600">Get Started</button>
              </div>
            </Link>
            <Link to="/signup/lab">
              <div className="bg-teal-100 bg-opacity-50 p-6 rounded-lg shadow-lg w-64">
                <img src={Lab} alt="Lab Icon" className="mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white">Lab Version</h2>
                <p className="text-sm text-gray-300 mt-2">(Designing/Printing only)</p>
                <p className="text-sm text-gray-300 mt-1">Built for labs and studios that manage e-album creation for their photographer clients.</p>
                <button className="mt-4 bg-[#40F2BD] text-[#01441F] px-14 py-2 rounded-[9px] hover:bg-teal-600">Get Started</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSignup;