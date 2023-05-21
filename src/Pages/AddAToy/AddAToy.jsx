import React, { useContext } from 'react';
import useTitle from '../../Hooks/useTitle';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { BsPlusCircle } from 'react-icons/bs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../Providers/AuthProviders';


const AddAToy = () => {

    const {user} = useContext(AuthContext)

    useTitle('Add A Toy')

    const { register, handleSubmit, setValue, reset } = useForm();

    const subcategories = [
        { value: 'avengers', label: 'Avengers' },
        { value: 'x_men', label: 'X-men' },
        { value: 'gotg', label: 'Guardian of the Galaxy' },
        { value: 'secret_society', label: 'Secret Society' },
        { value: 'justice_league', label: 'Justice League' },
        { value: 'suicide_squad', label: 'Suicide Squad' },
        { value: 'dragon_ball', label: 'Dragon Ball Z' },
        { value: 'one_piece', label: 'One Piece' },
        { value: 'jjk', label: 'Jujutsu Kaisen' }

    ];

    const formVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const onSubmit = (data) => {

        fetch("https://action-avenue-server.vercel.app/all-toys", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire(
                    'Good job!',
                    'Your Toy Stored in Store!',
                    'success'
                )
                console.log(result);
                reset()
                setValue('subcategory', null);
            });
        console.log(data);

    };

    const handleSelectChange = (selectedOption) => {
        const subcategoryValue = selectedOption ? selectedOption.label : '';
        setValue('subcategory', subcategoryValue);
    };
      

    return (
        <div  className="w-full max-w-7xl mx-auto mt-10 mb-20">
            
            <h2 className='text-[#65C3C8] text-5xl font-semibold text-center mb-8'>Add a Toy</h2>
            
            <div className='shadow-lg bg-white px-4 py-2 rounded-md'>

                <motion.form
                    className="form mx-auto w-full max-w-4xl"
                    onSubmit={handleSubmit(onSubmit)}
                    initial="hidden"
                    animate="visible"
                    variants={formVariants}
                    transition={{ duration: 0.3 }}
                >
                    <div className='grid grid-cols-2  gap-2'>
                        <div className="form-group">
                            <label htmlFor="pictureUrl" className="text-[#65C3C8] mb-2">
                                Picture URL
                            </label>
                            <input
                                type="text"
                                id="pictureUrl"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Enter the picture URL"
                                {...register('pictureUrl')}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name" className="text-[#65C3C8] mb-2">Toy Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Enter Toy Name"
                                {...register('name')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sellerName" className="text-[#65C3C8] mb-2">Seller Name</label>
                            <input
                                type="text"
                                id="sellerName"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Enter Your Name"
                                value={user?.displayName}
                                {...register('sellerName')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sellerEmail" className="text-[#65C3C8] mb-2">Seller Email</label>
                            <input
                                type="text"
                                id="sellerEmail"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Enter Your E-mail"
                                value={user?.email}
                                {...register('sellerEmail')}
                            />
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="subcategory" className="text-[#65C3C8] mb-2">Sub-category</label>
                        <Select
                            id="subcategory"
                            {...register('subcategory')}
                            options={subcategories}
                            classNamePrefix="select"
                            onChange={handleSelectChange}
                        />
                    </div>
                    <div className='grid grid-cols-2  gap-2'>
                        <div className="form-group">
                            <label htmlFor="price" className="text-[#65C3C8] mb-2">Price</label>
                            <input
                                type="text"
                                id="price"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Enter Toy Price (Without $ Sign)"
                                {...register('price')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating" className="text-[#65C3C8] mb-2">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                step="0.1"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Rating"
                                {...register('rating')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity" className="text-[#65C3C8] mb-2">Available Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Quantity"
                                {...register('quantity')}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="text-[#65C3C8] mb-2">Description</label>
                            <textarea
                                id="description"
                                className="form-control outline-none border-[1px] w-full border-[#65C3C8] px-3 py-2 rounded-md mb-2 focus:ring-[#65C3C8] focus:border-[#65C3C8] transition-colors duration-300"
                                placeholder="Enter Toy Description"
                                {...register('description')}
                                rows="1"
                            />
                        </div>
                    </div>
                    
                    <motion.button
                        type="submit"
                        className="bg-[#65C3C8] hover:bg-[#529EA9] w-full text-white px-4 py-2 rounded-md text-center cursor-pointer flex items-center justify-center"
                        whileHover={{ scale: 0.95 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="mr-2">Add Toy</span>
                        <BsPlusCircle className="text-2xl" />
                    </motion.button>

                </motion.form>

            </div>

        </div>
    );
};

export default AddAToy;