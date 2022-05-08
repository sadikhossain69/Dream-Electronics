import './HomeItem.css'
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomeItem = ({ item }) => {

    const { _id, name, image, description, price, quantity, supplier } = item
    // console.log(_id);
    const navigate = useNavigate()

    const handleUpdateItem = id => {
        navigate(`/inventories/${id}`)
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div className="card card-item" style={{ width: '100%', height: '100%' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6>{name}</h6>
                    <p className="card-text">{description}</p>
                    <span className='fw-bold d-block'>Price: ${price}</span>
                    <span className='fw-bold d-block my-1'>Quantity: {quantity}</span>
                    <h6 className='fw-bold'>Supplier: {supplier}</h6>
                    <div onClick={ () => handleUpdateItem(_id) } className="w-100">
                        <button className="btn btn-outline-success w-100">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;