import React from 'react';

const LabCredits = () => {
  return (
    <div className="min-h-screen text-white font-rubik backdrop-blur-[2px] bg-cover bg-no-repeat px-4 md:px-8 py-6" style={{ backgroundImage: `url('/bg-pattern.svg')` }}>
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-[28.88px] font-extrabold font-rubik text-[#CCE7F6] text-start">
          Manage Credits / Subscription
        </h2>
        <p className="text-[18.77px] font-semibold font-rubik text-white text-start">
          Summary of your albums, usage, and quick actions.
        </p>
      </div>

      {/* GOLD Card */}
      <div className="flex justify-start">
        <div className="w-[280px] md:w-[320px] bg-gradient-to-b from-[#FFE1C3] to-[#FFF2E3] rounded-tl-[73.83px] rounded-tr-[16.41px] rounded-bl-[16.41px] rounded-br-[30.57px] shadow-lg p-5 text-center relative">
          {/* GOLD Title */}
          <h3 className="text-[#FF7B10] text-[26px] font-extrabold font-rubik mb-1">GOLD</h3>
          <p className="text-[#FF9F29] text-[20px] font-bold">RS. 899</p>
          <p className="text-[#7B4400] text-[14px] font-medium">For 3 Albums</p>

          {/* Current Plan Ribbon */}
          <div className="absolute top-[90px] right-[-20px] bg-[linear-gradient(97.23deg,_#8F4F0F_-69.91%,_#E48A22_35.92%)] rounded-tl-[18.64px] rounded-br-[11.19px] rounded-bl-[0.75px] text-white text-[10px] px-4 py-2 font-semibold shadow-md">
            Current Plan
          </div>

          {/* Plan Details */}
          <div className="text-[#A93C21] mt-5 text-sm space-y-2 font-rubik">
            <p>Recharge type: <span className="font-bold">10pk/Codes</span></p>
            <p>Credits Used: <span className="font-bold">2/10 used</span></p>
            <p>Expires on: <span className="font-bold">24/09/2025</span></p>
            <p>Credits Left: <span className="font-bold">8 codes left</span></p>
          </div>

          {/* Upgrade Plan Button */}
          <button className="mt-6 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200 bg-[linear-gradient(97.23deg,_#8F4F0F_-69.91%,_#E48A22_35.92%)] hover:opacity-90">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default LabCredits;