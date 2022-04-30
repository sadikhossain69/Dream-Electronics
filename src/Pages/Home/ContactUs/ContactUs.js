import './ContactUs.css'
import React from 'react';

const ContactUs = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div className='text-center mb-5'>
                <span className='contact-header'>Contact Us</span>
            </div>
            <div className="row text-center">
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <img className='img-fluid' src="https://www.howtogeek.com/wp-content/uploads/2021/01/google-maps-satellite.png?height=200p&trim=2,2,2,2" alt="" />
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