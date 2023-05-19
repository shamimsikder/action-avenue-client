import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrendingThisMonth = () => {

    AOS.init()

    return (
        <div className='w-full max-w-7xl mx-auto mt-10'>

            <div data-aos="fade-right" className='mb-10 text-center'>
                <p className='text-5xl font-semibold'>Trending This Month</p>
            </div>            
            
        </div>
    );
};

export default TrendingThisMonth;