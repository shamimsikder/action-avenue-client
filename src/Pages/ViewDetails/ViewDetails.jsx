import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
  
    const { _id, name, sellerName, sellerEmail, price, quantity, rating, description, picture } = data;
    console.log(name)
    
    return (
        <div className='w-full max-w-7xl mx-auto mt-10 mb-20'>
            <h1>{name}</h1>
            <label  className="bg-[#65C3C8] hover:bg-[#529EA9] w-full text-white px-4 py-2 rounded-md text-center cursor-pointer"  htmlFor={`my-modal-${_id}`} data-aos="fade-right" data-aos-duration="500">
                View Details
            </label>
            <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative flex flex-col">
                    <label htmlFor={`my-modal-${_id}`} className="btn btn-primary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={picture} alt={name} className="w-96 h-96 rounded-md mx-auto object-cover mb-4"/>
                    <h3 className="text-md "><span className='text-lg font-semibold'>Toy Name</span>: {name}</h3>
                    <h3 className="text-lg"><span className='text-lg font-semibold'>Seller Name</span>: {sellerName}</h3>
                    <h3 className="text-lg"><span className='text-lg font-semibold'>Seller Email</span>: {sellerEmail}</h3>
                    <h3 className="text-lg"><span className='text-lg font-semibold'>Price</span>: {price}</h3>
                    <h3 className="text-lg"><span className='text-lg font-semibold'>Quantity</span>: {quantity}</h3>
                    <h3 className="text-lg"><span className='text-lg font-semibold'>Rating</span>: {rating}</h3>
                    <p className="py-4">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;