import './Banner.css'
import React from 'react';
import banner from '../../../Images/Banner/banner.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`, height: '100vh', backgroundSize: 'cover'}} >
            <h3>hello</h3>
        </div>
    );
};

export default Banner;