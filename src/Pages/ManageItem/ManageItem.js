import './ManageItem.css'
import React from 'react';
import { Bounce } from 'react-reveal';
import axios from 'axios';
import toast from 'react-hot-toast';

const ManageItem = ({ manageItem }) => {

    const { _id, name, description, image, price, quantity, supplier } = manageItem

    const handleManageItemDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are You Sure?')

        if(proceed) {
            const url = `http://localhost:5000/addedItems/${id}`
            axios.delete(url)
            .then(res => {
                console.log(res.data);
                if(res.status === 200) {
                    toast('Item Deleted, Please Reload The Page')
                }
            })
            .catch(err => {
                console.error(err);
            })
        }

    }

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
                            <div onClick={ () => handleManageItemDelete(_id) } className="w-100">
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