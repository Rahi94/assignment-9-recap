import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <div className='w-full'>
            <Banner></Banner>
            <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;