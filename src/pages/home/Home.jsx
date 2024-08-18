import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const allData = useLoaderData()
    // console.log(data)
    return (
        <div>
            <Navbar></Navbar>

            <div className='w-full'>
                <Banner></Banner>
                <Slider></Slider>
            </div>
            {/* data card */}
            <div className='mt-16'>
                <div className='text-center text-black'>
                    <h3 className='font-bold text-4xl'>Find Your Ideal Space</h3>
                    <h2>From urban apartments to suburban retreats, explore our diverse range of <br /> properties that fit your unique preferences and needs.</h2>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    allData.map(data => <Card
                        key={data.id}
                        data={data}
                    ></Card>)
                }
            </div>
            </div>

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Home;