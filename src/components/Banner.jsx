import React from 'react';

const Banner = () => {
    return (
        <div className=' w-full ' style={{
           
            width: '',
            height: '400px',
            imageResolution: '1080px',
            backgroundSize: 'cover',
            backgroundImage: `url("/images (77).jpeg")`,
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='text-white pt-32 text-center mt-8'>
                <h3 className='text-5xl font-bold pb-4'>Discover Your Perfect Home</h3>
                <p>Whether you're buying, selling, or investing, our expert real estate services guide you every step of the way. <br /> Start your journey to a better future with us.</p>
                <button className='btn  text-white btn-accent mt-4'>Get started</button>
            </div>
            
        </div>
    );
};

export default Banner;