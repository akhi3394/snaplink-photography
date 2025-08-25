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
            ANIPICX <span className="text-[#CCE7F6]">PRIVACY POLICY</span>
          </h1>
          <div className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Effective Date: 12/02/2025
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            Welcome to AniPicx! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            We provide end-to-end encryption for all your data and do not share any data with third parties for any purpose whatsoever.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* 1. Information We Collect */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">1. Information We Collect</h2>
            </div>
            <p className="text-[16px] text-[#DCDCDC] leading-[24px] font-rubik text-start">
              We collect the following types of information:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                {
                  label: "Personal Information:",
                  text: "Name, email address, phone number, and payment details.",
                },
                {
                  label: "Usage Data:",
                  text: "Information about how you interact with our website and services, including IP address, browser type, and pages visited.",
                },
                {
                  label: "Cookies:",
                  text: "We use cookies to enhance your experience on our site. Cookies are small data files stored on your device.",
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

          {/* 2. How We Use Your Information */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">2. How We Use Your Information</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We use the information we collect for the following purposes:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "To provide and improve our services.",
                "To process transactions and manage your subscription.",
                "To communicate with you about updates, promotions, and support.",
                "To analyze website usage and enhance user experience.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">3. Sharing Your Information</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Service Providers: Third-party vendors who assist us in operating our website and providing our services.",
                "Legal Requirements: When required by law or in response to legal requests.",
                "Business Transfers: In connection with any merger, acquisition, or sale of company assets.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* 4. Data Security */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">4. Data Security</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We implement appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no online data transmission or storage system can be guaranteed to be 100% secure.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* 5. Your Rights */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">5. Your Rights</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              You have the right to:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Access and update your personal information.",
                "Request deletion of your personal information.",
                "Opt-out of receiving promotional communications from us.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              To exercise these rights, please contact us at hello@AniPicx.com.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* 6. Changes to This Policy */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">6. Changes to This Policy</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of our services constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;