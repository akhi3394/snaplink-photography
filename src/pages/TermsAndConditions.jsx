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
            ANIPICX <span className="text-[#CCE7F6]">TERMS AND CONDITIONS</span>
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
            Welcome to AniPicx! These Terms and Conditions govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms. If you do not agree with these terms, please do not use our site.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* Services */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">1. Services</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              AniPicx provides a platform for creating and managing 3D virtual wedding albums (Flipbook). Our services include:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Access to AniPicx's web-based application.",
                "Options to create and customize 3D virtual albums.",
                "Shareable viewing of Flipbooks for clients.",
                "Editing and management tools for photographers and lab owners.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Data Storage and Server Costs */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">2. Data Storage and Server Costs</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              At AniPicx, we understand how valuable your data is. Once you upload and create a 3D album, we store it securely — not just for a few days or months, but for decades.
            </p>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              While you may pay once to update photos and create a flipbook, we continue to maintain and host your data long-term, which requires ongoing server costs from our side. This is why our pricing might appear higher at first — but unlike other services, we do not auto-delete your albums. Your memories remain safe and accessible.
            </p>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              To retain your album permanently, please activate a valid plan.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">3. User Responsibilities</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              As a user, you agree to:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Provide accurate and complete information.",
                "Use our services only for lawful purposes.",
                "Maintain the confidentiality of your account credentials.",
                "Notify us immediately of any unauthorized use of your account.",
                "Avoid misuse of free trial services or creating multiple fake accounts.",
                "Violation of any terms may result in account suspension or permanent ban, along with loss of data access.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Subscription Plans */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">4. Subscription Plans</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We offer the following subscription plans:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "For Photographers (Studio version - Daily limit of 3 QR Album 3D albums)",
                "Monthly Plan: ₹199 per month, allowing up to 40 QR Album credits.",
                "Yearly Plan: ₹999 per year, offering 3 QR Album creation per day.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start mt-2">
              One AniPicx credit is used to create one 3D Flipbook.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Payment and Refunds */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">5. Payment and Refunds</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              Payments for subscriptions are processed through our payment gateway. We do not store your payment information. All fees are non-refundable except as required by law.
            </p>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              In case of any issues with billing, please contact our support team at anssinfotech@gmail.com.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">6. Intellectual Property</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              All content and materials on our website, including text, graphics, logos, and software, are the property of AniPicx or its licensors. You may not use or reproduce any content without our express permission.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">7. Limitation of Liability</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              AniPicx is not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid for the subscription, if any.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">8. Changes to Terms</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We reserve the right to update or modify these terms at any time. We will notify you of any significant changes, and your continued use of our services will constitute acceptance of the updated terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;