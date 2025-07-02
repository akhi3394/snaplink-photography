import React from 'react';

const ExperienceSection = () => {
  const demoBooks = [
    {
      id: 1,
      title: 'Demo Book 1',
      image:
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Wedding ceremony with traditional elements',
    },
    {
      id: 2,
      title: 'Demo Book 2',
      image:
        'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Newborn baby photography',
    },
    {
      id: 3,
      title: 'Demo Book 3',
      image:
        'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Wedding rings and hands',
    },
  ];

  return (
    <section
      className="mb-10 mx-5 rounded-[25px] py-10"
      style={{
        boxShadow: '9px 4px 10.9px 0px #FFFFFF0A',
        backgroundColor: '#FFFFFF0A',
      }}
    >
      <div className="">
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl font-bold">Experience It Yourself</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 xl:px-32 mx-auto">
          {demoBooks.map((book, index) => (
            <div key={book.id} className="group relative">
              {/* Image with conditional rounded corners */}
              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? 'rounded-tr-[60px] rounded-bl-[60px]'
                    : index === 1
                    ? 'rounded-br-[60px]'
                    : 'rounded-tr-[60px] rounded-bl-[60px]'
                }`}
              >
                {/* Demo Book Label */}
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-[#f3eeeeb0] text-[#222] px-5 py-3 rounded-md text-[13px] font-semibold">
                    {book.title}
                  </span>
                </div>

                {/* Image */}
                <img
                  src={book.image}
                  alt={book.alt}
                  className="w-full h-[230px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Click & Feel Button */}
              <div className="flex justify-center mt-4">
                <button className="text-white text-sm underline underline-offset-4 hover:opacity-80">
                  Click & Feel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
