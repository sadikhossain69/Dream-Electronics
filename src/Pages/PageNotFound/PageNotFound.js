import './PageNotFound.css'
import React from 'react';
import error from '../../Images/error/error.png'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={{height: '90vh'}} className='d-flex justify-content-center align-items-center flex-column' >
            <h2>
                404 Page Not Found
            </h2>
            <Link className='btn btn-primary' to='/' >Back To Home</Link>
        </div>
    );
};

export default PageNotFound;