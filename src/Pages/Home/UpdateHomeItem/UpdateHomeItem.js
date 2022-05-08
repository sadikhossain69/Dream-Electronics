import './UpdateHomeItem.css'
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateHomeItem = () => {

    const { id } = useParams()
    const [updateHomeItem, setUpdateHomeItem] = useState({})
    const [input, setInput] = useState(0)
    const [updatedQuantity, setUpdatedQuantity] = useState(updateHomeItem?.quantity)

    useEffect(() => {
        const url = `https://pacific-thicket-77981.herokuapp.com/inventories/${id}`
        axios.get(url)
            .then(res => {
                setUpdateHomeItem(res.data);
            })
            .catch(err => {
                console.error(err)
            })
    }, [id, updatedQuantity])

    const handleDeliver = () => {
        const newQuantity = parseInt(updateHomeItem.quantity) - 1
        if (newQuantity <= 0) {
            toast.error("No Stock Here Now")
        }
        else {
            const newUpdateQuantity = { newQuantity }

            const url = `https://pacific-thicket-77981.herokuapp.com/inventories/${id}`
            axios
                .put(url, newUpdateQuantity)
                .then(function (response) {
                    if (response.data.modifiedCount === 1) {
                        console.log(newUpdateQuantity.newQuantity);
                        setUpdatedQuantity(newUpdateQuantity.newQuantity)
                        toast.success('1 Item Delivered');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }

    const handleAddInput = event => {
        const inputValue = event.target.value
        setInput(inputValue);
    }

    const handleAddQuantity = () => {
        const newQuantity = parseInt(updateHomeItem.quantity) + parseInt(input)
        console.log(newQuantity);
        if (newQuantity <= 0) {
            toast.error("No Stock Here Now")
        }
        else {
            const newUpdateQuantity = { newQuantity }
            const url = `https://pacific-thicket-77981.herokuapp.com/inventories/${id}`

            axios
                .put(url, newUpdateQuantity)
                .then(function (response) {
                    if (response.data.modifiedCount === 1) {
                        setUpdatedQuantity(newUpdateQuantity.newQuantity)
                        toast.success('Added successful');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }

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
                    <button onClick={handleDeliver} className='btn btn-primary' >
                        Deliver
                    </button>
                    <input onChange={handleAddInput} className='d-block mx-auto w-50 my-3' type="number" name="" id="" />
                    <button onClick={handleAddQuantity} className="btn btn-primary mb-3">
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