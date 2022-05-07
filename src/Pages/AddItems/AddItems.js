import './AddItems.css'
import React from 'react';

const AddItems = () => {
    return (
        <div className="row mt-5">
            <div className='additem-div text-center col-sm-12' >
                <h2>Add New Items</h2>
                <input className='inp mt-3' type="text" placeholder='Email' />
                <input className='inp mt-3' type="text" placeholder='Name' />
                <input className='inp mt-3' type="text" placeholder='Supplier Name' />
                <input className='inp mt-3' type="text" placeholder='Photo Url' />
                <textarea className='textarea my-3' name="textarea" id="" cols="50" rows="5" placeholder='Description' ></textarea> <br />
                <input className='inp mt-3' type="number" placeholder='Price' />
                <input className='inp mt-3' type="number" placeholder='Quantity' /> <br />
            <button className="btn btn-primary mt-3">Add Item</button>
            </div>
        </div>
    );
};

export default AddItems;