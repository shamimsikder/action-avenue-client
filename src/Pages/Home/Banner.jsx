import React from 'react';

const Banner = () => {
  return (
    <div className='w-full max-w-7xl mx-auto mt-10 mb-20'>
        <div className="hero w-full h-[400px] md:h-[720px] bg-[url(https://i.ibb.co/dpNvTqQ/rsz-2avengers.jpg)] bg-cover bg-center">
        <div className="hero-overlay  bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="text-2xl md:text-6xl mb-4 font-bold">Welcome to <br /> <span className='text-[#65C3C8]'>Action Avenue</span></h1>
                    <p className="mb-5 text-sm md:text-xl text-white">Discover a world of incredible Toys.</p>
                    <button className="mt-2 md:mt-8 px-2 py-2 md:px-8 md:py-4 bg-[#65C3C8] hover:bg-[#529EA9] text-white md:font-bold rounded-md">Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
