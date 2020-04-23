import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../Firebase/firebase.utils';


const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='name' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>HOME</Link>
                <Link to='' className='option'>CONTACT</Link>
                {
                    currentUser ?
                    ( <div className='option'onClick={() => auth.signOut()}>SIGN OUT</div> ) :
                    (
                    <Link to='/signin'>SIGN IN</Link>)
                }
            </div>
        </div>
    )
};

export default Header;