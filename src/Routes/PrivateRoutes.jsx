import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    useEffect(() => {
        
        sessionStorage.setItem('currentLocation', location.pathname);
    
    }, [location.pathname])

    if (loading) {
        return (
            <div className="flex justify-center items-center w-full h-full mt-10">
                <div className="w-12 h-12 rounded-full animate-spin border-2 border-solid border-[#65C3C8] border-t-transparent"></div>
            </div>
        )
    }

    if (user) {
        return children
    }

    return <>
                {toast.info('You have to log in first to view details', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })}
        <Navigate to="/login" state={{ from: sessionStorage.getItem('currentLocation') }} replace />;
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
    </>

};

export default PrivateRoutes;