import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./categories.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
      AOS.init();
  }, []);

  const handleViewDetails = (toyId) => {
        if (!user) {

            toast.error('Please log in to view toy details.');

            return navigate('/login')
        
        }
  };
 
  return (
    <div className="w-full max-w-7xl mx-auto py-8">

        <div data-aos="fade-right" className='mb-10 text-center'>
            <p className='text-5xl font-semibold'>Shop by Categories</p>
        </div>

        <Tabs>
            <TabList>
                {categories.map((category, index) => (
                    <Tab key={index}>{category.name}</Tab>
                ))}
            </TabList>

            {categories.map((category, index) => (
                <TabPanel key={index}>
                    {category.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                            <h2 className="text-xl font-bold mb-4">{subcategory.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {subcategory.toys.map((toy) => (
                                    <div data-aos="fade-right" key={toy._id} className="bg-white w-full md:w-96 rounded-md shadow-md p-4 flex flex-col items-center">
                                        <img src={toy.picture} alt={toy.name} className="w-96 h-96 rounded-md object-cover mb-4"/>
                                        <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                                        <p className="text-gray-600 mb-2">{toy.price}</p>
                                        <p className="text-gray-600 mb-2">Rating: {toy.rating}</p>
                                        
                                        <label  onClick={() => handleViewDetails(toy._id)} className="bg-[#65C3C8] text-sm md:text-lg hover:bg-[#529EA9] cursor-pointer w-full text-center text-white py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"  htmlFor={`my-modal-${toy._id}`} data-aos="fade-right" data-aos-duration="500" >
                                            View Details
                                        </label>
                                        <input type="checkbox" id={`my-modal-${toy._id}`} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box relative flex flex-col">
                                                <label htmlFor={`my-modal-${toy._id}`} className="btn btn-primary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                <img src={toy.picture} alt={toy.name} className="w-96 h-96 rounded-md mx-auto object-cover mb-4"/>
                                                <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Toy Name</span>: {toy.name}</h3>
                                                <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Seller Name</span>: {toy.sellerName}</h3>
                                                <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Seller Email</span>: {toy.sellerEmail}</h3>
                                                <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Price</span>: ${toy.price}</h3>
                                                <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Quantity</span>: {toy.quantity}</h3>
                                                <h3 className="text-lg text-start md:ml-10"><span className='text-lg font-semibold'>Rating</span>: {toy.rating}</h3>
                                                <p className="py-4 md:ml-10 text-start">{toy.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </TabPanel>
            ))}
        </Tabs>
    </div>
  );
};

export default ShopByCategory;
