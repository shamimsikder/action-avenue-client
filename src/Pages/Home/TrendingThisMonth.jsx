import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFire, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating-stars-component';

const TrendingThisMonth = () => {
  const [trending, setTrending] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    fetch('trending.json')
      .then((res) => res.json())
      .then((data) => setTrending(data));
    AOS.init();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 mb-20">
        <div data-aos="fade-right" className="mb-10 text-center">
            <p className="text-5xl font-semibold">Trending This Month</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trending.map((item, index) => (
                <div key={item.id} className="relative flex flex-col items-center w-full md:w-96 rounded-lg overflow-hidden" data-aos="fade-right">
                    <div className="relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                        <img src={item.picture} alt={item.name} className="w-96 h-96 rounded-md object-cover"/>
                        {hoveredIndex === index && (
                            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
                                <div>
                                    <div className="flex items-center">
                                        <Rating
                                            count={5}
                                            value={item.rating}
                                            size={20}
                                            emptyIcon={<FaRegStar size={20} />}
                                            halfIcon={<FaStarHalfAlt size={20} />}
                                            filledIcon={<FaStar size={20} />}
                                            activeColor="#FFC107"
                                            edit={false}
                                        />
                                        <div className="ml-2 text-gray-200">{item.rating}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-white text-xl font-bold">
                                        {item.name}
                                    </div>
                                    <div className="">
                                        <div className="text-gray-200">{item.price}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="absolute top-0 right-4 md:top-0 md:right-0 bg-[#FF6B6B] text-white px-2 py-1 rounded-md">
                        <FaFire />
                    </div>
                </div>              
            ))}
        </div>
    </div>
  );
};

export default TrendingThisMonth;
