import React from 'react';
import { FaTools } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import aboutBg from '../assets/AboutsUsBG.jpg';

const RefundCancelPolicy = () => {
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
            ANIPICX <span className="text-[#CCE7F6]">REFUND POLICY</span>
          </h1>
          <p className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Effective Date: 12/02/2025
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            Thank you for choosing AniPicx. We are committed to providing you with the best possible service. If you are not satisfied with your purchase, please review our refund policy to understand the process for requesting a refund.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* Eligibility for Refund */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">1. Eligibility for Refund</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              Refunds are available under the following conditions:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "If you experience technical issues with the AniPicx platform that we are unable to resolve within a reasonable time frame.",
                "If there is a billing error that was not corrected after contacting our support team.",
                "If you cancel your subscription within the first 7 days of purchase and have not used any services.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Non-Refundable Items */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">2. Non-Refundable Items</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              The following items are non-refundable:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Fees for subscription plans after the initial 7-day period.",
                "Any services or features used during the subscription period.",
                "Custom branding or design work completed as part of your subscription.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Refund Request Process */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">3. Refund Request Process</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              To request a refund, please follow these steps:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Contact our support team via email at hello@AniPicx.com with your refund request.",
                "Provide your order details and a brief explanation of the reason for your refund request.",
                "Our team will review your request and respond within 5-7 business days.",
                "If your request is approved, we will process the refund to the original payment method used for the purchase.",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Changes to the Refund Policy */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">4. Changes to the Refund Policy</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              We may update or modify this refund policy at any time. Any changes will be posted on this page, and your continued use of our services will constitute acceptance of the updated policy.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Contact Us */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">5. Contact Us</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              If you have any questions or concerns regarding our refund policy, please contact us:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                "Email: hello@AniPicx.com",
                "Address: Aligarh, India",
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

export default RefundCancelPolicy;