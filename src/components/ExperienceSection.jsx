import React from 'react';

const ExperienceSection = () => {
  const demoBooks = [
    {
      id: 1,
      title: "Demo Book 1",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      alt: "Wedding ceremony with traditional elements"
    },
    {
      id: 2,
      title: "Demo Book 2", 
      image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      alt: "Newborn baby photography"
    },
    {
      id: 3,
      title: "Demo Book 3",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop", 
      alt: "Wedding rings and hands"
    }
  ];

  return (
    <section className="py-20">
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold">Experience It Yourself</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demoBooks.map((book) => (
            <div key={book.id} className="demo-card group">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Demo Book Label */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white bg-opacity-90 text-navy px-3 py-1 rounded-full text-sm font-medium">
                    {book.title}
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={book.image}
                    alt={book.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Click & Feel Button */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <button className="bg-white text-navy px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Click & Feel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;