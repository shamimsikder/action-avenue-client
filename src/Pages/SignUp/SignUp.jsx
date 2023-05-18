import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';

const SignUp = () => {

    useTitle("Sign Up")

    return (
        <div className="flex justify-center items-center mt-20 mb-20">
            <div className="bg-white rounded-lg shadow-md w-96 p-8 animate__animated animate__fadeInDown">
                
                <div className="flex items-center justify-center mb-4">
                    <img src="zyro-image.png" alt="Logo" className="h-8 mr-2" />
                    <h1 className="text-2xl font-bold text-gray-900">Sign Up</h1>
                </div>
                
                <form className="space-y-4">
                
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" type="text" name='name' placeholder="John Denver" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                            Photo URL
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" type="text" name='photo' placeholder="Photo URL" />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" name='email' type="email" placeholder="you@example.com" />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" name="password" type="password" placeholder="********" />
                    </div>
                    
                    <div className="">
                        <button className="bg-[#65C3C8] w-full transition-colors duration-200 hover:bg-[#529EA9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple" type="submit">
                            Sign Up
                        </button>
                    </div>

                    <div>
                        <a className="inline-block align-baseline font-bold text-sm">Already Have an Account? <Link to="/signup" className="text-[#65C3C8] hover:text-[#529EA9]">LogIn</Link></a>
                    </div>
                
                    <div className="mt-4 text-gray-600 text-center">
                        <span className="px-3 bg-white">or sign in with</span>
                    </div>
                    
                    <div className="flex gap-4 flex-col w-full justify-center mt-2">
                        <button className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            <FaGoogle className="inline mr-2" /> Google
                        </button>
                    </div>

                </form>

            </div>
        </div>

    );
};

export default SignUp;