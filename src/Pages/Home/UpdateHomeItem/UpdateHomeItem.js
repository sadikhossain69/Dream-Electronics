import './UpdateHomeItem.css'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateHomeItem = () => {

    const {id} = useParams()
    const [updateHomeItem, setUpdateHomeItem] = useState({})

    useEffect( () => {
        const url = `http://localhost:5000/inventories/${id}`
        axios.get(url)
        .then(res => {
            setUpdateHomeItem(res.data);
        })
        .catch(err => {
            console.error(err)
        })
    }, [id] )

    const { name, supplier, quantity, price, image } = updateHomeItem

    return (
        <div className='container'>
            <div className="row mx-auto w-50">
                <span className='text-center my-3'>
                <Link to='/manageitems' className='btn btn-outline-primary' >Manage Item</Link>
                </span>
                <div className='col-lg-12 col-md-12 col-sm-12 update-card text-center p-2'>
                    <img className='img-fluid' src={image} alt="" />
                    <h6>Name: {name}</h6>
                    <h6>Supplier Name: {supplier}</h6>
                    <p className='fw-bold'>Price: {price}</p>
                    <p className='fw-bold'>Quantity: {quantity}</p>
                    <button className='btn btn-primary' >
                        Deliver
                    </button>
                    <input className='d-block mx-auto w-50 my-3' type="number" name="" id="" />
                    <button className="btn btn-primary mb-3">
                        Add Quantity
                    </button>
                </div>
                <span className='text-center my-3'>
                    <Link to='/additems' className='btn btn-outline-success' >Add New Item</Link>
                </span>
            </div>
        </div>
    );
};

export default UpdateHomeItem;