import './Login.css'
import React from 'react';

const Login = () => {
    return (
        <div style={{height: '90vh'}} className='container'>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <form>
                        <div className="mb-5">
                            <input type="email" className="form-control form-input" id="exampleInputEmail1" aria-describedby="emailHelp" autoFocus='false' name='email' placeholder='Email'/>
                        </div>
                        <div className="mb-5">
                            <input type="password" className="form-control form-input" id="exampleInputPassword1" name='password' placeholder='Password'/>
                        </div>
                        <input className='btn btn-primary submit-button' type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;