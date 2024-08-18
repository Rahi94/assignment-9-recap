import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='w-full'>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;