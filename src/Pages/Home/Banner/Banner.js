import './Banner.css'
import React from 'react';
import banner from '../../../Images/Banner/banner.png'
import Typed from 'react-typed';

const Banner = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${banner})`, height: '100vh', backgroundSize: 'cover' }} className='d-flex justify-content-center align-items-center' >
                <div>
                    <h2 className='banner-words'>
                        <Typed
                            strings={[
                                'Welcome To Dream Electronics',
                                'Here You Can Find Lots Of Electronics Device',
                                'Explore To Find Your Favourite Electronics'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Banner;