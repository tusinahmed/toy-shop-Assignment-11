import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <Outlet> </Outlet>
            <Footer> </Footer>



        </div>
    );
};

export default MainLayout;