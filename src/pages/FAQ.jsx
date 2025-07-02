import React from 'react';
import faqImg from '../assets/FaqsBG.jpg';

// Reusable style objects
const faqHeadingStyle = {
  fontFamily: 'Rubik',
  fontWeight: 700,
  fontSize: '39.12px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#CCE7F6',
};

const subtitleStyle = {
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontStyle: 'italic',
  fontSize: '15px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#7D7D7D',
};

const questionStyle = {
  fontFamily: 'Rubik',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '100%',
  letterSpacing: '0%',
  verticalAlign: 'bottom',
  color: '#CCE7F6',
  marginBottom: '8px',
};

const answerStyle = {
  fontFamily: 'Rubik',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '20px',
  letterSpacing: '0%',
  color: '#9C9C9C',
};

const boxStyle = {
  boxShadow: '0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040',
};

const FAQ = () => {
  // FAQ data with numbers
  const faqs = [
    {
      number: '1.',
      question: 'What is a 3D Album?',
      answer: 'A 3D album is a digital, interactive photo album that mimics a real-world photo book experience – complete with smooth transitions, page flips, and a high-quality viewing format.',
    },
    {
      number: '2.',
      question: 'How do I create a 3D album?',
      answer: [
        'Sign in to your account.',
        'Click on "Create Album".',
        'Upload your photos, set the album title, and customize the design.',
        'Click "Generate 3D View" to preview and publish.',
      ],
    },
    {
      number: '3.',
      question: 'Can I share my album with clients?',
      answer: 'Yes! Once your album is ready, you can generate a QR code or link to share it with clients. They can view it on any device – no app needed.',
    },
    {
      number: '4.',
      question: 'Can I customize the look of my albums?',
      answer: ['Add your logo', 'Choose cover styles'],
    },
  ];

  return (
    <div
      className="relative mt-[101px] px-[80px] max-[1440px]:px-[40px] max-[1024px]:px-[20px] bg-no-repeat bg-cover min-h-[100vh]"
      style={{ backgroundImage: `url(${faqImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6 p-7">
          <h1 style={faqHeadingStyle} className='mb-2'>FAQ's</h1>
          <p style={subtitleStyle}>
            Got questions? We’ve answered the most common ones to help you get started faster.
          </p>
        </div>
        <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#5B5B5B] scrollbar-track-transparent">

        {/* FAQ Content */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-6"
              style={boxStyle}
            >
              <h2 className='text-start'
                style={questionStyle}
              >
                {faq.number} {faq.question}
              </h2>
              {Array.isArray(faq.answer) ? (
                <ul className="list-disc ml-6 text-start space-y-2">
                  {faq.answer.map((item, i) => (
                    <li
                      key={i}
                      style={answerStyle}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-start"
                  style={answerStyle}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;