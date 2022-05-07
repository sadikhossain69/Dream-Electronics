import './MyItems.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {

    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/addedItems')
            .then(res => {
                setMyItems(res.data);
            })
    }, [])

    return (
        <div>
            {
                myItems.map(myItem => <MyItem
                    key={myItem._id}
                    myItem={myItem}
                />)
            }
        </div>
    );
};

export default MyItems;