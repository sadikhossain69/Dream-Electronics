import './Login.css'
import React from 'react';
import login from '../../Images/Login/login.svg'
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault()
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
                    <form onClick={handleSubmit} >
                        <div className="mb-5">
                            <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus={false} name='email' placeholder='Email' />
                        </div>
                        <div className="mb-5">
                            <input type="password" className="form-control form-input" id="exampleInputPassword1" name='password' placeholder='Password' />
                        </div>
                        <p>New To Dream Electronics <Link to='/register' >Register Now</Link> </p>
                        <p>Forget Password <span className='btn text-primary' >Reset Now</span> </p>
                        <input className='btn btn-primary submit-button' type="submit" value="Login" />
                    </form>
                    <div style={{border: '1px solid rgb(126, 118, 118)'}} className='mt-2' >

                    </div>
                    <div className='btn btn-outline-success w-100 mt-2'>
                        <h5> <BsGoogle/> Continue With Google</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;