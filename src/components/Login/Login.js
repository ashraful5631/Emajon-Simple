import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    return (
        <div className='login-div'>
            <div>
                <h2>Please Log In</h2>
                <form>
                    <label htmlFor="Email">Email</label> <br />
                    <input type="email" name="" placeholder='Your Email' />
                    <br />
                    <label htmlFor="Password">Password</label> <br />
                    <input type="password" name="" placeholder='Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>NeW To Emajon?<Link to='/register'>Create Account</Link></p>
                <div>.............or..............</div>
                <button className='btn-regular' onClick={signInUsingGoogle}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;