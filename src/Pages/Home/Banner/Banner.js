import './Banner.css'
import React from 'react';
import banner from '../../../Images/Banner/banner.png'

const Banner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, height: '100vh', backgroundSize: 'cover' }} className='d-flex justify-content-center align-items-center' >
                <div>
                    <h2 className='banner-words'>
                        Hello World
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Banner;