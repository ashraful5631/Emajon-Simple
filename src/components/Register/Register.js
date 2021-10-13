import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register-div'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <label htmlFor="Email">Email</label> <br />
                    <input type="email" name="" placeholder='Your Email' />
                    <br />

                    <label htmlFor="Password">Password</label> <br />
                    <input type="password" name="" placeholder='Your Password' /> <br />

                    <label htmlFor="Password">Confirm  Password</label> <br />
                    <input type="password" name="" placeholder='Confirm Password' />
                    <br />

                    <input type="submit" value="Submit" />
                </form>

                <p>Already Have an Account?<Link to='/login'>Log In</Link></p>
                <div>.............or..............</div>
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;