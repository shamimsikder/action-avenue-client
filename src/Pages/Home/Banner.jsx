import React from 'react';

const Banner = () => {
  return (
    <div className='w-full max-w-7xl mx-auto mt-10 mb-20'>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-75"></div>
        <img className="w-full h-auto rounded-md" src="https://i.ibb.co/bdHntY3/avengers.jpg" alt="Avengers Banner" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">Welcome to <br /> <span className='text-[#65C3C8]'>Action Avenue</span></h1>
          <p className="text-sm md:text-xl">Discover a world of incredible Toys.</p>
          <button className="mt-2 md:mt-8 px-2 py-2 md:px-8 md:py-4 bg-[#65C3C8] hover:bg-[#529EA9] text-white font-bold rounded-md">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
