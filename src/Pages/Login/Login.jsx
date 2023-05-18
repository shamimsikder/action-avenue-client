import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';

const Login = () => {

    useTitle("Login")

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg shadow-md w-96 p-8 animate__animated animate__fadeInDown">
                
                <div className="flex items-center justify-center mb-4">
                    <img src="zyro-image.png" alt="Logo" className="h-8 mr-2" />
                    <h1 className="text-2xl font-bold text-gray-900">Log in</h1>
                </div>
                
                <form className="space-y-4">
                
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" id="email" type="email" placeholder="you@example.com" />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" id="password" type="password" placeholder="********" />
                    </div>
                    
                    <div>
                        <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#" > Forgot Password?</a>
                    </div>
                    
                    <div className="">
                        <button className="bg-indigo-500 w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple" type="submit">
                            Log In
                        </button>
                    </div>
                
                    <div className="mt-4 text-gray-600 text-center">
                        <span className="px-3 bg-white">or sign in with</span>
                    </div>
                    
                    <div className="flex gap-4 flex-col w-full justify-center mt-2">
                        <button className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            <FaGoogle className="inline mr-2" /> Google
                        </button>
                        <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded shadow">
                            <FaGithub className="inline mr-2" /> Github
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;
