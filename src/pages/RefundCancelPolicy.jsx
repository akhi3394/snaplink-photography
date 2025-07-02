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
            REFUND/CANCEL <span className="text-[#CCE7F6]">POLICY</span>
          </h1>
          <p className="italic text-[#DCDCDC] text-[14px] font-rubik">
            Effective Date: 12/02/2025
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">
          <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mb-4 text-start">
            We value transparency and fairness. Please read our refund and cancellation policy carefully before subscribing to any plan or purchasing credits.
          </p>

          <div className="border-b border-[#4F4F4F] mb-4"></div>

          {/* Cancellation Policy */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Cancellation Policy</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'You can cancel your subscription at any time through your account settings.',
                'Once cancelled, your plan will remain active until the end of the current billing cycle.',
                'After cancellation, you will lose access to premium features and stored content when the billing cycle ends.',
                'Auto-renewal will be disabled upon cancellation.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Refund Policy */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <FaTools className="text-[#FFD700] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Refund Policy</h2>
            </div>
            <p className="text-[16px] text-[#CCE7F6] leading-[24px] font-rubik text-start">
              All purchases are final. We do not offer refunds for:
            </p>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'Unused credits',
                'Partially used plans',
                'Plan cancellations after payment',
                'Refunds will only be issued in cases of duplicate payments or technical errors caused by our system.',
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#f2f2f2] shrink-0"></div>
                  <span className="text-[16px] text-[#CCE7F6] font-[500] font-rubik">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-[16px] text-[#A3A3A3] leading-[24px] font-rubik mt-2 text-start">
              If you believe you are eligible for a refund, please contact our support team within 7 days of the transaction.
            </p>
            <div className="border-b border-[#4F4F4F] mt-4"></div>
          </div>

          {/* Important Notes */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <BsInfoCircleFill className="text-[#84C1FF] text-[18px]" />
              <h2 className="text-[18px] font-[600] text-white font-rubik">Important Notes</h2>
            </div>
            <ul className="ml-4 mt-2 space-y-2">
              {[
                'Once your plan expires, you may no longer be able to create or access Snaplinks albums.',
                'We are not responsible for missed cancellations due to user inaction or delayed notifications.',
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