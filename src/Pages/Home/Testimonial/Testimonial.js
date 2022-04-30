import './Testimonial.css'
import React from 'react';
import testmonial from '../../../Images/Testmonial/testmonial.jpg'
import { Fade } from 'react-reveal';

const Testimonial = () => {
    return (
        <div>
            <div className='text-center' >
                <span className='testimonial-header'>Testimonial</span>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <Fade left>
                                <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                                    <img src={testmonial} alt="" />
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-lg-6 col-md-12 col-sm-12 testimonial-text">
                                    <h4 className='mt-4'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
                                    </h4>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;