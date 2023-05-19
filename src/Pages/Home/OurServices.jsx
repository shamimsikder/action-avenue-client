import React from 'react';
import { FaShoppingCart, FaTruck, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

const OurServices = () => {

    const services = [
        {
            icon: <FaShoppingCart />,
            title: 'Easy Ordering',
            description: 'Browse and order action figures from our wide selection with a few simple clicks.',
        },
        {
            icon: <FaTruck />,
            title: 'Fast Shipping',
            description: 'We ensure quick and reliable shipping to deliver your action figures to your doorstep.',
        },
        {
            icon: <FaDollarSign />,
            title: 'Best Price',
            description: 'Get the best prices for your favorite action figures without breaking the bank.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Secure Transactions',
            description: 'We prioritize the security of your transactions to provide a safe shopping experience.',
        },
        
    ];

    return (
        <div className='w-full max-w-7xl mx-auto py-8'>

            
            <div data-aos="fade-right" className="mb-10 text-center">
                <h2 className="text-5xl font-semibold text-center mb-8">Our Services</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <div key={index} data-aos="fade-right" className="bg-white flex flex-col p-3 rounded-md border-[1px] border-teal-500 text-center">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <div className="text-2xl md:text-4xl text-[#65C3C8] mb-4">{service.icon}</div>
                        <h3 className="text-md md:text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
                      

        </div>
    );
};

export default OurServices;
