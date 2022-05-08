import './MyItems.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyItem from '../MyItem/MyItem';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const MyItems = () => {

    const [myItems, setMyItems] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        const email = user?.email
        const url = `http://localhost:5000/addedItems?email=${email}`
        axios.get(url, {
            headers: {
                authorization: `Bearer, ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                setMyItems(res.data);
            })
            .catch(err => {
                console.log(err.message);
                if(err.response.status === 401 || err.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                    return toast('User Forbidden, Please Login Again')
                }
            })
            
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