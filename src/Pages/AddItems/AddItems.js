import './AddItems.css'
import React from 'react';
import { Zoom } from 'react-reveal';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddItems = () => {

    const [user, loading, error] = useAuthState(auth);


    const handleAddNewItem = event => {
        event.preventDefault()
        const email = user.email
        const name = event.target.name.value
        const supplierName = event.target.supplierName.value
        const photoUrl = event.target.photoUrl.value
        const price = event.target.price.value
        const quantity = event.target.quantity.value


        const url = `http://localhost:5000/addedItems`

        axios.post(url, {
            email,
            name,
            supplierName,
            photoUrl,
            price,
            quantity,
        })
        .then(res => {
            console.log(res);
            toast('New Item Added')
        })
        .catch(err => {
            console.error(err);
        })

        event.target.reset()
    }

    return (
        <>
            <Zoom>
                <div className="row mt-5">
                    <form onSubmit={handleAddNewItem} >
                        <div className='additem-div text-center col-sm-12' >
                            <h2>Add New Items</h2>
                            <input name='email' className='inp mt-3' type="email" placeholder='Email' value={user?.email} />
                            <input name='name' className='inp mt-3' type="text" placeholder='Name' required />
                            <input name='supplierName' className='inp mt-3' type="text" placeholder='Supplier Name' required />
                            <input name='photoUrl' className='inp mt-3' type="text" placeholder='Photo Url' required />
                             <br />
                            <input name='price' className='inp mt-3' type="number" placeholder='Price' required />
                            <input name='quantity' className='inp mt-3' type="number" placeholder='Quantity' required /> <br />
                            <input className='btn btn-primary mt-3' type="submit" value="Add New Item" />
                        </div>
                    </form>
                </div>
            </Zoom>
        </>
    );
};

export default AddItems;