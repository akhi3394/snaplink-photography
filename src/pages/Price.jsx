import React from 'react';
import PricingBg from '../assets/PricingBg.jpg';
import Camera2 from '../assets/Camera2.png';
import card1Vector from '../assets/card1Vector.png';
import card2Vector from '../assets/card2Vector.png';
import card3Vector from '../assets/card3Vector.png';
import BasicPlanSaverBadge from '../assets/BasicPlanSaverBadge.png';
import GoldPlanSaverBadge from '../assets/GoldPlanSaverBadge.png';

const Price = () => {
  const plans = [
    {
      id: 'basic',
      name: 'BASIC',
      price: '199',
      period: 'For 1 Month',
      yearlyPrice: '789',
      yearlyPeriod: 'Per Year',
      badge: 'New',
      vector: card1Vector,
      cardBg: 'bg-[linear-gradient(181.05deg,#E2E2FF_34.22%,#FFFFFF_90.84%)]',
      headerBg: 'bg-[#3147C1]',
      buttonBg: 'bg-[#3147C1] hover:bg-[#2A3FB0]',
      features: [
        '1 Album Credit',
        'QR Sharing',
        'Easy Sharing Via Link',
        'Edit Song & Details',
        'No App Required to View',
        'Shareable on Social media',
        'Re-Arrange Sheets',
        'Chat With Clients',
        'Views Monetization'
      ],
      textColor: '#3147C1'
    },
    {
      id: 'standard',
      name: 'STANDARD',
      price: '495',
      period: 'For 1 Month',
      yearlyPrice: '1098',
      yearlyPeriod: 'Per Year',
      badge: null,
      vector: card2Vector,
      cardBg: 'bg-[linear-gradient(181.05deg,#FFFAE2_34.22%,#FFFFFF_90.84%)]',
      headerBg: 'bg-[#B2880B]',
      buttonBg: 'bg-[#B2880B] hover:bg-[#9F780A]',
      features: [
        '2 Album Credit',
        'QR Sharing',
        'Easy Sharing Via Link',
        'Edit Song & Details',
        'No App Required to View',
        'Shareable on Social media',
        'Re-Arrange Sheets',
        'Chat With Clients',
        'Views Monetization'
      ],
      textColor: '#B2880B'
    },
    {
      id: 'gold',
      name: 'GOLD',
      price: '899',
      period: 'For 1 Month',
      yearlyPrice: '1498',
      yearlyPeriod: 'Per Year',
      badge: 'Saver',
      vector: card3Vector,
      cardBg: 'bg-[linear-gradient(181.05deg,#FFEDE2_34.22%,#FFFFFF_90.84%)]',
      headerBg: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.46),rgba(255,255,255,0.46)),linear-gradient(98.67deg,#8F4F0F_-99.77%,#E48A22_79.82%)]',
      buttonBg: 'bg-[linear-gradient(0deg,rgba(255,255,255,0.46),rgba(255,255,255,0.46)),linear-gradient(98.67deg,#8F4F0F_-99.77%,#E48A22_79.82%)] hover:bg-[linear-gradient(0deg,rgba(255,255,255,0.36),rgba(255,255,255,0.36)),linear-gradient(98.67deg,#8F4F0F_-99.77%,#E48A22_79.82%)]',
      features: [
        '3 Album Credit',
        'QR Sharing',
        'Easy Sharing Via Link',
        'Edit Song & Details',
        'No App Required to View',
        'Shareable on Social media',
        'Re-Arrange Sheets',
        'Chat With Clients',
        'Views Monetization'
      ],
      textColor: '#A93C21'
    }
  ];

  return (
    <div className="relative min-h-[100vh] bg-cover bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(${PricingBg})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Pricing Content */}
      <div className="relative z-10 mt-[110px] w-full max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className='text-[#CCE7F6] text-[28px] font-rubik font-extrabold'>Our Pricing & Plans</p>
          <p className='text-[15px] text-[#9C9C9C]'>This plan allows you to create Snaplinks</p>
          <div className="inline-flex items-center text-white px-4 py-2 rounded-full text-[15px]font-medium mb-4">

            <span className="mr-2">⭐</span>
            1 credit = 1 Snaplink
          </div>
          <p className="text-white text-[14px] max-w-md mx-auto">
            Once your plan expires, you will no longer be able to create or access existing Snaplinks.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center relative">
          {plans.map((plan) => (
            <div key={plan.id} className="relative w-80">

              {/* Badge */}
              {plan.badge === 'New' && (
                <img
                  src={BasicPlanSaverBadge}
                  alt="New Badge"
                  className="absolute z-20 top-[-0px] right-[-22px] w-[120px] h-[50px]  object-fill bg-no-repeat "
                />
              )}
              {plan.badge === 'Saver' && (
                <img
                  src={GoldPlanSaverBadge}
                  alt="Saver Badge"
                  className="absolute  z-20 top-[-0px] right-[-22px] w-[120px] h-[50px]  object-fill bg-no-repeat"
                />
              )}

              {/* Card with Vector */}
              <div className="relative">

                <div className={`${plan.cardBg} rounded-tl-[73.83px] rounded-tr-[16.41px] rounded-bl-[16.41px] rounded-br-[30.57px] p-6 w-full shadow-2xl transform transition-all duration-300  mb-20 relative z-10`}>
                  {/* Header */}
                  <div className={`${plan.headerBg}  to rounded-tr-[19.57px] rounded-bl-[11.74px] rounded-br-[0.78px] p-4 mb-6 w-[145px] h-[120px] text-white absolute top-14 -left-5 overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="text-[26.25px] font-bold">RS. {plan.price}/-</div>
                      <div className="text-sm opacity-90">{plan.period}</div>
                      <div className="text-xs opacity-75 mt-1">{plan.yearlyPrice}/- Per Year</div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <img
                      src={plan.vector}
                      alt={`${plan.name} Vector`}
                      className="absolute top-30 right-0 w-30"
                    />
                    <img
                      src={plan.vector}
                      alt={`${plan.name} Vector`}
                      className="absolute top-16 right-5 w-[100px]"
                    />
                  </div>
                  <div className="mt-[180px]">
                    {/* Plan name */}
                    <div className="text-center mb-6">
                      <h3 className={`text-2xl font-bold ${plan.id === 'basic' ? 'text-[#3147C1]' : plan.id === 'standard' ? 'text-[#B2880B]' : 'text-[#A93C21]'}`}>
                        {plan.name}
                      </h3>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center text-sm bg-white p-2 rounded">
                          <span className='font-normal text-center' style={{ color: plan.textColor }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button className={`w-full ${plan.buttonBg} text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                      Purchase Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camera bottom left */}
      <div className="fixed bottom-0 left-0 z-0">
        <img src={Camera2} alt="Camera2" className="w-40 h-auto brightness-50" />
      </div>
    </div>
  );
};

export default Price;
