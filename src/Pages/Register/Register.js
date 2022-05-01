import './Register.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs'
import register from '../../Images/Register/register.svg'
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (loading) {
        return <Loading/>
    }

    if(googleLoading) {
        return <Loading/>
    }
    
    if(googleUser) {
        console.log(googleUser);
        toast('User Logged In')
    }

    if(googleError) {
        toast(googleError.message)
    }


    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.password2.value

        if (user) {
            toast('Already Have A User')
        }
        if(password !== confirmPassword) {
            toast(`Password & Confirm Password Didn't Match!`)
        }
        else {
            createUserWithEmailAndPassword(email, password)
            if (error) {
                return toast(error.message)
            }
            toast('New User Created')
        }

    }

    return (
        <div className='container'>
            <div className="row mt-5">

                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <img src={register} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <div className='text-center'>
                        <span className='mt-5 text-center mb-5 login-title' >Register</span>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-5 mt-2">
                            <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder='Email' required />
                        </div>
                        <div className="mb-5">
                            <input type="password" className="form-control form-input" id="exampleInputPassword1" name='password' placeholder='Password' required />
                        </div>
                        <div className="mb-5">
                            <input type="password" className="form-control form-input" id="exampleInputPassword2" name='password2' placeholder='Confirm Password' required />
                        </div>
                        <p>Already Have An Account <Link to='/login' >Login Here</Link> </p>
                        <input className='btn btn-primary submit-button' type="submit" value="Register" />
                    </form>
                    <div style={{ border: '1px solid rgb(126, 118, 118)' }} className='mt-2' >

                    </div>
                    <div onClick={ () => signInWithGoogle() }  className='btn btn-outline-success w-100 mt-2'>
                        <h5> <BsGoogle /> Continue With Google</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;