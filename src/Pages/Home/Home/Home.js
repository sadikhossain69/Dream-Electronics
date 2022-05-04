import './Home.css'
import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Testimonial from '../Testimonial/Testimonial';
import HomeItems from '../HomeItems/HomeItems';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HomeItems/>
            <ContactUs/>
            <Testimonial/>
        </div>
    );
};

export default Home;