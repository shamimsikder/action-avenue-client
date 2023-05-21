import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

const AllToys = () => {
    
    useTitle("All Toys");

    const allToys = useLoaderData();
    const [searchInput, setSearchInput] = useState('');
    const [allToysData, setAllToysData] = useState([]);
    const [visibleToys, setVisibleToys] = useState(20);

    const rowVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    const handleSearch = () => {

        fetch(`https://action-avenue-server.vercel.app/allToys/${searchInput}`)
        
            .then((res) => res.json())
            .then((data) => {
            setAllToysData(data);
          
        });

    };

    const handleLoadMore = () => {
        setVisibleToys((prevVisibleToys) => prevVisibleToys + 5);
    };

    useEffect(() => {
        
        setAllToysData(allToys);

    }, [allToys]);

    return (
        <div className="w-full max-w-7xl mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">All Toys</h1>

        <div className="flex items-center justify-between mb-4">
            <div className='inline-flex items-center gap-2'>
                <input
                    type="text"
                    placeholder="Search Toys"
                    className="px-4 py-2 border border-[#65C3C8] rounded-md outline-none"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className="px-4 py-2 bg-[#65C3C8] text-white rounded-md hover:bg-[#529EA9] transition duration-300" onClick={handleSearch}>        
                    Search
                </button>
            </div>
            <div>
                <button className="px-4 py-2 bg-[#65C3C8] text-white rounded-md hover:bg-[#529EA9] transition duration-300">
                    <FaSortUp className="inline" />
                    Sort Ascending
                </button>
                <button className="px-4 py-2 bg-[#65C3C8] text-white rounded-md hover:bg-[#529EA9] transition duration-300 ml-2">
                    <FaSortDown className="inline" />
                    Sort Descending
                </button>
            </div>
        </div>

        <div className="overflow-x-auto">
            <motion.table
            className="min-w-full bg-white border rounded-lg border-custom-gray"
            initial="hidden"
            animate="visible"
            >
            <thead className='text-sm md:text-lg'>
                <tr>
                <th className="py-2 px-4 border-b">Seller</th>
                <th className="py-2 px-4 border-b">Toy Name</th>
                <th className="py-2 px-4 border-b">Sub-category</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Available Quantity</th>
                <th className="py-2 px-4 border-b"></th>
                </tr>
            </thead>
            <tbody className="table-auto">
                {allToysData.map((toy) => (
                <motion.tr
                    key={toy._id}
                    variants={rowVariants}
                    className="text-center text-sm md:text-lg"
                >
                    <td className="py-2 px-4 border-b">{toy.sellerName}</td>
                    <td className="py-2 px-4 border-b">{toy.name}</td>
                    <td className="py-2 px-4 border-b">{toy.subcategory}</td>
                    <td className="py-2 px-4 border-b">{toy.price}</td>
                    <td className="py-2 px-4 border-b">{toy.quantity}</td>
                    <td className="py-2 px-4 border-b">
                    <Link to={`/view-details/${toy._id}`}>
                        <button className="bg-[#65C3C8] text-sm md:text-lg hover:bg-[#529EA9] text-white py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        View Details
                        </button>
                    </Link>
                    </td>
                </motion.tr>
                ))}
            </tbody>
            </motion.table>

            {visibleToys < allToysData.length && (
                <div className="flex justify-center mt-4">
                    <button
                    className="px-4 py-2 bg-[#65C3C8] text-white rounded-md hover:bg-[#529EA9] transition duration-300"
                    onClick={handleLoadMore}>
                        Load More
                    </button>
                </div>
            )}
        </div>
        </div>
    );
};

export default AllToys;
