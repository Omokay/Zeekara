import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';


const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='name'/>
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>Home</Link>
                <Link to='' className='option'>Contact</Link>
            </div>
        </div>
    )
};

export default Header;