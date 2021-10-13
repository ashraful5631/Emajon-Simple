import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory()
    const location = useLocation()

    const handelGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                history.push(location.state?.from || '/')
            })
    }
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
                <p>NeW To Emajon Website?<Link to='/register'>Create Account</Link></p>
                <div>.............or..............</div>
                <button className='btn-regular' onClick={handelGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;