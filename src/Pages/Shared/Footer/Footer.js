import './Footer.css'
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ height: '150px' }} className='bg-dark text-white '>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <div>
                    <h3>This is Footer</h3>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <p>hello</p>
                <p>hello</p>
            </div>
        </footer>
    );
};

export default Footer;