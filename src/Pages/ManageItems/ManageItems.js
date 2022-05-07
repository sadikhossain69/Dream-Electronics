import './ManageItems.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {

    const [manageItems, setManageItems] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/inventories`
        axios.get(url)
            .then(res => {
                setManageItems(res.data);
            })
    }, [manageItems])

    return (
        <div className="container">
            <div className='row text-center' >
                {
                    manageItems.map(manageItem => <ManageItem
                        key={manageItem._id}
                        manageItem={manageItem}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageItems;