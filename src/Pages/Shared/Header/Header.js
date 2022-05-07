import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    if(loading) {
        return <Loading></Loading>
    }


    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-design">
                <div className="container-fluid">
                    <Link className=' ms-3 text-decoration-none text-dark' to='/' >
                        <h2>Dream Electronics</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <Link className='text-decoration-none text-dark navbar-button me-5 d-block mb-1' to='/' >Home</Link>
                        {
                            user ? 
                            <Link className='text-decoration-none text-dark navbar-button me-5 d-block mb-1' to='/manageitems' >Manage Items</Link> 
                            : ''
                        }
                        {
                            user ?
                            <Link className='text-decoration-none text-dark navbar-button me-5 d-block mb-1' to='/additems' >Add Items</Link>
                            : ''
                        }
                        {
                            user ?
                            <Link className='text-decoration-none text-dark navbar-button me-5 d-block mb-1' to='/myitems' >My Items</Link>
                            : ''
                        }
                        <Link className='text-decoration-none text-dark navbar-button me-5 d-block mb-1' to='/blog' >Blog</Link>
                        {
                            user ?
                                <button onClick={ () => signOut(auth) } className="login-button">
                                    Sign Out
                                </button>
                                :
                                <button className='login-button' >
                                    <Link className='login-btn text-decoration-none' to='/login' >Login</Link>
                                </button>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;