import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';



const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [selectedToy, setSelectedToy] = useState(null);
    const { register, handleSubmit } = useForm();

    useTitle("My Toys")

    useEffect(() => {
        fetch(`https://action-avenue-server.vercel.app/myToys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
    }, []);
    
    const handleDeleteToy = (toyId) => {
        
          fetch(`https://action-avenue-server.vercel.app/myToys/${toyId}`, {
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

    const handleUpdateToy = async (data) => {
        try {
          const response = await fetch(`https://action-avenue-server.vercel.app/myToys/${selectedToy._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Failed to update toy data.");
          }

          const result = await response.json();

          console.log(result);
          if (result.modifiedCount > 0) {
            const updatedDataResponse = await fetch(`https://action-avenue-server.vercel.app/myToys/${user?.email}`);
            const updatedData = await updatedDataResponse.json();
            setToys(updatedData);

            toast.success("Toy Data Updated Successfully", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            setSelectedToy(null);
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="w-full max-w-7xl mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-6 text-center">My Toys</h1>

            <div className="overflow-x-auto">
                <table
                    className="min-w-full bg-white border rounded-lg border-gray-300"
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
                            <tr
                                key={toy._id}
                               
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
                                        <FaEdit className="text-[#65C3C8] cursor-pointer" onClick={() => setSelectedToy(toy)}/>
                                        <FaTrash className='text-[#65C3C8] cursor-pointer' onClick={() => handleDeleteToy(toy._id)}/>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedToy && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="modal modal-open">
                        <div className="modal-box w-96 mx-auto">
                    <   h2 className="text-xl font-semibold mb-4">Update Toy</h2>
                        <form onSubmit={handleSubmit(handleUpdateToy)}>
                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Price
                            </label>
                            <input
                                className="input input-bordered rounded-md w-full"
                                type="text"
                                defaultValue={selectedToy.price}
                                {...register('price')}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Available Quantity
                            </label>
                            <input
                                className="input input-bordered rounded-md w-full"
                                type="text"
                                defaultValue={selectedToy.quantity}
                                {...register('quantity')}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Detail Description
                            </label>
                            <textarea
                                className="textarea textarea-bordered rounded-md w-full"
                                defaultValue={selectedToy.description}
                                {...register('description')}
                            />
                        </div>
                            <div className="flex justify-end">
                            <button
                                type="button"
                                className="btn btn-primary rounded-md text-white mr-2"
                                onClick={() => setSelectedToy(null)}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary rounded-md text-white">
                                Update Toy
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            )}

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