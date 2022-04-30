import './Footer.css'
import React from 'react';
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer style={{ height: '150px' }} className='bg-dark text-white mt-5'>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <div>
                    <h6>
                    Copyright © 2022 Dream Electronics Team
                    </h6>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <span className='social-button'><BsFacebook /></span>
                <span className='social-button'><BsGoogle /></span>
                <span className='social-button'><BsInstagram /></span>
                <span className='social-button'><BsLinkedin/></span>
                <span className='social-button'><BsTwitter/></span>
            </div>
        </footer>
    );
};

export default Footer;