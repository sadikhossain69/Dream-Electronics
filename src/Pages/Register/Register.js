import './Register.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs'
import register from '../../Images/Register/register.svg'

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault()
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
                    <form onClick={handleSubmit} >
                        <div className="mb-5 mt-2">
                            <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus={false} name='email' placeholder='Email' required />
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
                    <div className='btn btn-outline-success w-100 mt-2'>
                        <h5> <BsGoogle /> Continue With Google</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;