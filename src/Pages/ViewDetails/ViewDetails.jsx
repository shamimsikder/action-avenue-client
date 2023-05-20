import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaTag, FaDollarSign, FaStar, FaBoxes, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating-stars-component';

const ViewDetails = () => {
    const { _id, pictureUrl, name, sellerName, sellerEmail, subcategory, price, rating, quantity, description} = useLoaderData();

    return (
        <div className="w-full max-w-7xl mx-auto py-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow p-8"
        >
            <div className="flex flex-col items-center md:flex-row">
                <div className="md:w-1/2">
                    <img src={pictureUrl} alt={name} className="w-96 h-96 object-cover rounded-md"/>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
                    <h2 className="text-3xl font-semibold mb-4">{name}</h2>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaUser className="mr-2 text-[#65C3C8] text-lg lg:text-2xl" />
                        <p className="text-base md:text-lg"><span className='font-semibold'>Seller:</span> {sellerName}</p>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaEnvelope className="mr-2 text-[#65C3C8] text-lg md:text-2xl" />
                        <p className="text-base md:text-lg"><span className='font-semibold'>Email:</span> {sellerEmail}</p>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaTag className="mr-2 text-[#65C3C8] text-lg md:text-2xl" />
                        <p className="text-base md:text-lg"><span className='font-semibold'>Subcategory:</span> {subcategory}</p>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaDollarSign className="mr-2 text-[#65C3C8] text-lg md:text-2xl" />
                        <p className="text-base md:text-lg"><span className='font-semibold'>Price:</span> ${price}</p>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaStar className="mr-2 text-[#65C3C8] text-lg md:text-2xl" />
                        <p className="text-base md:text-lg inline-flex items-center gap-1"><span className='font-semibold'>Rating:</span> <Rating
                                            count={5}
                                            value={rating}
                                            size={20}
                                            emptyIcon={<FaRegStar size={20} />}
                                            halfIcon={<FaStarHalfAlt size={20} />}
                                            filledIcon={<FaStar size={20} />}
                                            activeColor="#FFC107"
                                            edit={false}
                                        />
                        </p>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <FaBoxes className="mr-2 text-[#65C3C8] text-lg md:text-2xl" />
                        <p className="text-base md:text-lg"><span className='font-semibold'>Quantity:</span> {quantity}</p>
                    </div>
                    <p className="text-gray-600 mb-4"><span className='font-semibold'>Description:</span> {description}</p>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default ViewDetails;
