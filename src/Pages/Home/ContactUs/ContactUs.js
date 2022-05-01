import './ContactUs.css'
import React from 'react';
import map from '../../../Images/Map/map.webp'

const ContactUs = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div className='text-center mb-5'>
                <span className='contact-header'>Contact Us</span>
            </div>
            <div className="row text-center">
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img className='img-fluid' src={map} alt="" />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 mt-2'>
                    <input className='contact-input' placeholder='Name' type="text" /> <br />
                    <input className='contact-input' placeholder='Email' type="email" /> <br />
                    <button className='btn btn-outline-primary send-button mt-4'>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;