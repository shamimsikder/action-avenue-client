import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';


const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);

    useTitle("Mt Toys")

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/animeemporium@example.com`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
    }, []);
    
    const handleDeleteToy = (toyId) => {
        
          fetch(`http://localhost:5000/myToys/${toyId}`, {
            method: 'DELETE',
          })
            .then((response) => response.json())
            .then((data) => {
                setToys((prevToys) => prevToys.filter((toy) => toy._id !== toyId));
                toast.success('Toy Data Deleted Successfully', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
              console.log(data);
            })
            .catch((error) => console.error(error));
        
    };

    const rowVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <div className="w-full max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-6 text-center">All Toys</h1>

            <div className="overflow-x-auto">
                <motion.table
                    className="min-w-full bg-white border rounded-lg border-gray-300"
                    initial="hidden"
                    animate="visible"
                >
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Toy Name</th>
                            <th className="py-2 px-4 border-b">Seller</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Sub-categories</th>
                            <th className="py-2 px-4 border-b">Details</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy) => (
                            <motion.tr
                                key={toy._id}
                                variants={rowVariants}
                                className="text-center"
                            >
                                <td className="py-2 px-4 border-b">{toy.name}</td>
                                <td className="py-2 px-4 border-b">{toy.sellerName}</td>
                                <td className="py-2 px-4 border-b">{toy.sellerEmail}</td>
                                <td className="py-2 px-4 border-b">{toy.subcategory}</td>
                                <td className="py-2 px-4 border-b">
                                    <label className="flex items-center justify-center "  htmlFor={`my-modal-${toy._id}`} data-aos="fade-right" data-aos-duration="500">
                                            <FiEye className='text-[#65C3C8] cursor-pointer w-5 h-5'/>
                                    </label>
                                    <input type="checkbox" id={`my-modal-${toy._id}`} className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box relative flex flex-col">
                                            <label htmlFor={`my-modal-${toy._id}`} className="btn btn-primary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <img src={toy.pictureUrl} alt={toy.name} className="w-96 h-96 rounded-md mx-auto object-cover mb-4"/>
                                            <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Toy Name</span>: {toy.name}</h3>
                                            <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Seller Name</span>: {toy.sellerName}</h3>
                                            <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Seller Email</span>: {toy.sellerEmail}</h3>
                                            <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Price</span>: {toy.price}</h3>
                                            <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Quantity</span>: {toy.quantity}</h3>
                                            <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Rating</span>: {toy.rating}</h3>
                                            <p className="py-4 md:ml-10 text-start">{toy.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <span className='flex items-center justify-center gap-2'>
                                    <FaEdit className='text-[#65C3C8] cursor-pointer'/>
                                    <FaTrash className='text-[#65C3C8] cursor-pointer' onClick={() => handleDeleteToy(toy._id)}/>
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </motion.table>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
};

export default MyToys;