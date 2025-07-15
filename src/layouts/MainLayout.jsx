import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/NavBar';

const MainLayout = () => {



    return (
        <div className='font-text'>
           <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;