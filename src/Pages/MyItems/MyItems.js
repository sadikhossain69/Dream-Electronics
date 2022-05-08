import './MyItems.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyItem from '../MyItem/MyItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {

    const [myItems, setMyItems] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const email = user?.email
        const url = `https://pacific-thicket-77981.herokuapp.com/addedItems?email=${email}`
        axios.get(url, {
            headers: {
                authorization: `Bearer, ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                setMyItems(res.data);
            })
            // .catch(err => {
            //     console.log(err.message);
            //     if(err.response.status === 401 || err.response.status === 403) {
            //         signOut(auth)
            //         navigate('/login')
            //         return toast('User Forbidden, Please Login Again')
            //     }
            // })
            
    }, [user])

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