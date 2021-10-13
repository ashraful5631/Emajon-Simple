import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, signOutUser } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <NavLink to="/shipping">Shipping</NavLink>
                <NavLink to="/register">Register</NavLink>
                {user.email && <span style={{ color: 'white', marginRight: '20px' }}>Hello {user.displayName}</span>}

                {
                    user?.email ? <button
                        to="/shop" onClick={signOutUser}
                    >Log Out </button> :
                        <NavLink to="/login">Log In</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;