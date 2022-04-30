import './Home.css'
import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <ContactUs/>
            <Testimonial/>
        </div>
    );
};

export default Home;