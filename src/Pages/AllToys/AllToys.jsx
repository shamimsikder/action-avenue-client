import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useTitle("All Toys");

  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">All Toys</h1>

      <table className="min-w-full bg-white border border-gray-200">
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
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id}>
              <td className="py-2 px-4 border-b">{toy.seller}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subcategory}</td>
              <td className="py-2 px-4 border-b">{toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/view-details/${toy._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105">
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
