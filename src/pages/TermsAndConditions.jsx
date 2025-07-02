import React from 'react';
import { FaTools } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import aboutBg from '../assets/AboutsUsBG.jpg';

const TermsAndConditions = () => {
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
            TERMS & <span className="text-[#CCE7F6]">CONDITION</span>
          </h1>
          <p className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Effective Date: 12/02/2025
          </p>
        </div>

        {/* Scrollable Content */}
        <div
          className="h-[calc(100vh-220px)] pr-2 scrollbar-hide"
          style={{
            overflowY: 'auto', // Enable scrolling
            '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
            'scrollbar-width': 'none', // Hide scrollbar for Firefox
          }}
        >
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none; // Hide scrollbar for Chrome, Safari, and Opera
              }
            `}
          </style>
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            Welcome to Snaplink! By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* Account & Access */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">1. Account & Access</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'You must be 18 years or older to create an account.',
                'You are responsible for maintaining the security of your account credentials.',
                'All activities under your account are your responsibility.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Usage & Credits */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">2. Usage & Credits</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'Each Snaplink creation uses 1 credit.',
                'Credits are non-refundable and expire with your subscription plan.',
                'Once your plan expires, access to existing albums or links may be restricted or disabled.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Content Ownership */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">3. Content Ownership</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'You retain full rights to the photos and media you upload.',
                'By uploading, you grant Snaplink limited rights to display and deliver the content to your selected recipients.',
                'You are solely responsible for ensuring your uploaded content does not violate any copyright or privacy laws.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Sharing & Privacy */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">4. Sharing & Privacy</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'Snaplinks albums can be shared via unique links or QR codes.',
                'You can enable or disable access, set passwords, or delete shared links at any time.',
                'We do not sell or distribute your content or data to third parties.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Subscription & Billing */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">5. Subscription & Billing</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'Plans auto-renew unless cancelled before the billing date.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;