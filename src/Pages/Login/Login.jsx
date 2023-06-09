import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const {logInUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    useTitle("Login")

    const handleLogIn = (event) => {

        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        logInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                navigate(from, {replace: true})
            })
            .catch(error => { 
                console.error(error.message)
                toast.error(error.message, {
                    position: 'top-center',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            })
        
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                navigate(from, {replace: true})
            })
            .catch(error => { 
                console.error(error.message)
            })
    
        }

    return (
        <div className="flex justify-center items-center mt-20 mb-20">
            <div className="bg-white rounded-lg shadow-md w-96 p-8 animate__animated animate__fadeInDown">
                
                <div className="flex items-center justify-center mb-4">
                    <img src="zyro-image.png" alt="Logo" className="h-8 mr-2" />
                    <h1 className="text-2xl font-bold text-gray-900">LogIn</h1>
                </div>
                
                <form onSubmit={handleLogIn} className="space-y-4">
                
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" name="email" type="email" placeholder="you@example.com" />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" name="password" type="password" placeholder="********" />
                    </div>
                    
                    <div className="">
                        <button className="bg-[#65C3C8] w-full transition-colors duration-200 hover:bg-[#529EA9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple" type="submit">
                            Log In
                        </button>
                    </div>

                    <div>
                        <a className="inline-block align-baseline font-bold text-sm">Don't Have a Account? <Link to="/signup" className="text-[#65C3C8] hover:text-[#529EA9]">Sign Up</Link></a>
                    </div>
                
                    <div className="mt-4 text-gray-600 text-center">
                        <span className="px-3 bg-white">or sign in with</span>
                    </div>
                    
                    <div className="flex gap-4 flex-col w-full justify-center mt-2">
                        <button onClick={handleGoogleSignIn}  className="bg-white w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            <FaGoogle className="inline mr-2" />Sign in With Google
                        </button>
                    </div>

                </form>

            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
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

export default Login;
