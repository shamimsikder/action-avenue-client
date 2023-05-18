import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-48.2vh)]'>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;