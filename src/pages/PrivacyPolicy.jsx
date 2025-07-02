import React from 'react';
import { FaTools } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import aboutBg from '../assets/AboutsUsBG.jpg'; // Same BG as About Us

const PrivacyPolicy = () => {
  return (
    <div
      className="relative mt-[101px] px-[80px] max-[1440px]:px-[40px] max-[1024px]:px-[20px] bg-no-repeat bg-cover min-h-[100vh]"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10 p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[32px] max-[1440px]:text-[28px] font-[700] text-white font-rubik">
            PRIVACY <span className="text-[#CCE7F6]">POLICY</span>
          </h1>
          <div className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Effective Date: 12/02/2025
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">

          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            Welcome to Snaplink. Your privacy is important to us. This Privacy Policy explains how we collect, use,
            store, and protect your personal information when you use our platform.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* 1. Information We Collect */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">1. Information We Collect</h2>
            </div>
            <p className="text-[16px] text-[#DCDCDC] leading-[24px] font-rubik text-start">
              We collect limited information to provide you with a smooth and secure experience:
            </p>

            <ul className="ml-4 mt-2 space-y-2">
              {[
                {
                  label: "Account Information:",
                  text: "Your name, email address, and login details.",
                },
                {
                  label: "Uploaded Content:",
                  text: "Photos, albums, and related media you upload.",
                },
                {
                  label: "Usage Data:",
                  text: "Device type, browser, IP address, and activity logs.",
                },
                {
                  label: "Payment Information:",
                  text: "Collected securely via trusted third-party payment processors. (We do not store card details.)",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full shrink-0 bg-[#f2f2f2]"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">
                    <span className="text-[#CCE7F6] font-[600]">{item.label}</span> {item.text}
                  </span>
                </li>
              ))}
            </ul>


            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* 2. How We Use Your Data */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">2. How We Use Your Data</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We use your information to:
            </p>

            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Create and manage your Snaplink albums",
                "Generate QR codes and shareable links",
                "Communicate important updates or support messages",
                "Improve system performance and user experience",
                "Prevent unauthorized access or misuse",
                "We do not sell or share your personal data with third-party marketers.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">
                    {text}
                  </span>
                </li>
              ))}
            </ul>


            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
