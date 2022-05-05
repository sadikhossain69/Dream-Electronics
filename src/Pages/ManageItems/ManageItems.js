import './ManageItems.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageItems = () => {

    const [manageItems, setManageItems] = useState([])

    useEffect( () => {
        const url = `http://localhost:5000/inventories`
        axios.get(url)
        .then(res => {
            console.log(res.data);
        })
    }, [] )

    return (
        <div>
            
        </div>
    );
};

export default ManageItems;