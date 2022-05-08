import './MyItem.css'
import React from 'react';
import { Fade } from 'react-reveal';
import axios from 'axios';
import toast from 'react-hot-toast';

const MyItem = ({ myItem }) => {
    const { name, supplierName, _id, price, quantity, photoUrl } = myItem

    const handleAddedItemDelete = id => {

        let proceed = window.confirm('Are You Sure?')

        if (proceed) {
            const url = `https://pacific-thicket-77981.herokuapp.com/addedItems/${id}`

            axios.delete(url)
                .then(res => {
                    console.log(res);
                    if(res.status === 200) {
                        toast('Item Deleted, Reload The Page')
                    }
                })
                .catch(err => {
                    console.error(err)
                })
        }

    }

    return (

        <>
            <div>
                <Fade left>
                    <div className='my-item mt-3' >
                        <div >
                            <img style={{ width: '15rem' }} src={photoUrl} alt="" />
                        </div>
                        <h5>{name}</h5>
                        <h6>{supplierName}</h6>
                        <p>Price: ${price}</p>
                        <p>Qunatity: ${quantity}</p>
                        <button onClick={() => handleAddedItemDelete(_id)} className="btn btn-outline-danger">Delete</button>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default MyItem;