import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {



    return (
        <div className='font-text'>
           <Navbar></Navbar>
            <div className='max-w-7xl mx-auto min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;