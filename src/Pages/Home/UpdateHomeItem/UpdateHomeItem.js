import './UpdateHomeItem.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    return (
        <div>
            <h2>This is update home item!!!</h2>
            <h2>Name: {updateHomeItem.name}</h2>
        </div>
    );
};

export default UpdateHomeItem;