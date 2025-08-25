import React from 'react';
import { FaTools } from 'react-icons/fa';
import { BsInfoCircleFill } from 'react-icons/bs';
import aboutBg from '../assets/AboutsUsBG.jpg'; // Same BG as PrivacyPolicy

const HyperGuidelines = () => {
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
            AniPicx HYPER <span className="text-[#CCE7F6]">PROGRAM</span>
          </h1>
          <p className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Terms and Conditions for Printing Labs
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            By registering for the AniPicx Hyper program, you (the Printing Lab) agree to abide by the rules and regulations set by AniPicx India. Failure to comply with these guidelines may result in temporary or permanent account suspension without any refund.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* Section 1 */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">1. Compliance with AniPicx India Guidelines</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              The printing lab must strictly follow all rules, policies, and operational guidelines provided by AniPicx India.
            </p>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              Any violation of AniPicx's policies will lead to account suspension or permanent deletion.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Section 2 */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">2. Account Suspension & Termination</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              AniPicx India reserves the right to temporarily or permanently delete an account under the following circumstances:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'If the printing lab fails to comply with AniPicx India\'s rules and regulations.',
                'If incorrect, false, or misleading information/documents are provided during registration.',
                'If the printing lab is found to be using AniPicx services in an unauthorized or fraudulent manner.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Section 3 */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">3. No Refund Policy</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              If an account is suspended or terminated due to policy violations, any recharge amount will not be refunded.
            </p>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              AniPicx India holds the full right to deny refunds in case of misuse, policy breach, or fraudulent activity.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Section 4 */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">4. Verification & KYC Checks</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              AniPicx India will conduct regular verification and KYC checks to ensure compliance.
            </p>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              If required, physical officer visits may also be conducted for further verification.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Section 5 */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">5. Legal Authority & Final Decision</h2>
            </div>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              AniPicx India holds full authority to take action against any non-compliance and reserves the right to terminate access at its sole discretion.
            </p>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik text-start">
              The final decision regarding any disputes or policy violations will be made by AniPicx India, and the printing lab must accept and adhere to it.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            By proceeding with the registration, you acknowledge and agree to the above terms.
          </p>

        </div>
      </div>
    </div>
  );
};

export default HyperGuidelines;