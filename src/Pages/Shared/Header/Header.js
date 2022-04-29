import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className='ms-3' to='/' ><img style={{ height: '40px' }} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <Link className='navbar-button me-5 d-block mb-1' to='/home' >Home</Link>
                        <Link className='navbar-button me-5 d-block mb-1' to='/addservice' >Add Service</Link>
                        <Link className='navbar-button me-5 d-block mb-1' to='/youhelped' >You Helped</Link>
                        <Link className='navbar-button me-5 d-block mb-1' to='/event' >Event</Link>
                        <Link className='navbar-button me-5 d-block mb-1' to='/blog' >Blog</Link>
                        <button className='btn btn-primary' >
                            <Link className='text-white text-decoration-none' to='/login' >Login</Link>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;