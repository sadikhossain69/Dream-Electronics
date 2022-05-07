import './MyItem.css'
import React from 'react';
import { Fade } from 'react-reveal';

const MyItem = ({ myItem }) => {
    const { name, supplierName, description, price, quantity, photoUrl } = myItem

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
                        <button className="btn btn-outline-danger">Delete</button>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default MyItem;