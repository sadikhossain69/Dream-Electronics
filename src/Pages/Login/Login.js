import './Login.css'
import React, { useState } from 'react';
import login from '../../Images/Login/login.svg'
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import toast from 'react-hot-toast';
import { async } from '@firebase/util';

const Login = () => {

    const [email, setEmail] = useState('')

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, resetSending, resetError] = useSendPasswordResetEmail(
        auth
    );
    
    if(resetSending) {
        toast('Reset Password Sending')
    }

    if(resetError) {
        toast(resetError.message)
    }

    

    if (emailLoading) {
        return <Loading />
    }

    if (googleLoading) {
        return <Loading />
    }

    if (googleUser) {
        console.log(googleUser);
        toast('User Logged In')
    }

    if (googleError) {
        toast(googleError.message)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        if (!emailUser) {
            signInWithEmailAndPassword(email, password)

        }

        if (emailError) {
            toast(emailError.message)
        }
    }


    if (emailUser) {
        console.log(emailUser);
        toast('User Logged In')
    }



    return (
        <div className='container'>
            <div className="row mt-5">

                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <img src={login} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <div className='text-center'>
                        <span className='mt-5 text-center mb-5 login-title' >Login</span>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-5 mt-2">
                            <input onBlur={handleEmail} type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus={false} name='email' placeholder='Email' />
                        </div>
                        <div className="mb-5">
                            <input type="password" className="form-control form-input" id="exampleInputPassword1" name='password' placeholder='Password' />
                        </div>
                        <p>New To Dream Electronics <Link to='/register' >Register Now</Link> </p>
                        <p>Forget Password <span onClick={ async () => {
                            await sendPasswordResetEmail(email)
                        } } className='btn text-primary' >Reset Now</span> </p>
                        <input className='btn btn-primary submit-button' type="submit" value="Login" />
                    </form>
                    <div style={{ border: '1px solid rgb(126, 118, 118)' }} className='mt-2' >

                    </div>
                    <div onClick={() => signInWithGoogle()} className='btn btn-outline-success w-100 mt-2'>
                        <h5> <BsGoogle /> Continue With Google</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;