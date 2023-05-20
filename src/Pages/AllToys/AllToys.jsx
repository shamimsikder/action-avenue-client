import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
  
    useTitle("All Toys");

    const allToys = useLoaderData()

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">All Toys</h1>

      <table className="min-w-full bg-white border table-auto border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody className='table-auto'>
          {allToys.map((toy) => (
            <tr key={toy._id}>
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subcategory}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/view-details/${toy._id}`}>
                  <button className="bg-[#65C3C8] hover:bg-[#529EA9] text-white py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
