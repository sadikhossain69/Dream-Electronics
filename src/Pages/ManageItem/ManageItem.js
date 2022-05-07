import './ManageItem.css'
import React from 'react';
import { Bounce } from 'react-reveal';

const ManageItem = ({ manageItem }) => {

    const { name, description, image, price, quantity, supplier } = manageItem

    return (
        <>
            <Bounce>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                    <div className="card card-item" style={{ width: '100%', height: '100%' }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6>{name}</h6>
                            <p className="card-text">{description}</p>
                            <span className='fw-bold d-block'>Price: ${price}</span>
                            <span className='fw-bold d-block my-1'>Quantity: {quantity}</span>
                            <h6 className='fw-bold'>Supplier: {supplier}</h6>
                            <div className="w-100">
                                <button className="btn btn-outline-danger w-100">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Bounce>
        </>
    );
};

export default ManageItem;