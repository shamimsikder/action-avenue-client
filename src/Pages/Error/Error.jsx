import React from 'react';
import Lottie from "lottie-react";
import error from '../../../public/error-404-page.json'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full max-w-7xl mx-auto'>

            <div className='h-[50%] w-[50%] mt-10'>
                <Lottie animationData={error} loop={true} />
            </div>

            <div className='text-center'>
                <button className="mt-10 px-6 py-3 text-white rounded-md bg-[#65C3C8] w-full transition-colors duration-200 hover:bg-[#529EA9]">
                    <Link to='/'>Back to Home</Link>
                </button>
            </div>

        </div>
    );
};

export default Error;