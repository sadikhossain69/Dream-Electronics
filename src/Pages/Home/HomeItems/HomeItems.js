import './HomeItems.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeItem from '../HomeItem/HomeItem';

const HomeItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/inventories`
        axios.get(url)
            .then(res => {
                setItems(res.data);
            })
    }, [items])

    return (
        <>
            {/* <div className=""> */}
                <div>
                    <h2 className='text-center' >Inventory Items {items.length} </h2>
                    <div className="row mx-auto">
                        {
                            items.map(item => <HomeItem
                                key={item._id}
                                item={item}
                            />)
                        }
                    </div>
                </div>

            {/* </div> */}
        </>
    );
};

export default HomeItems;