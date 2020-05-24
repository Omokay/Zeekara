import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.style.scss';
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../../components/CartIcon/cart-icon.component';
import CartDropdown from '../../components/CartDropdown/cartDropdown.component';

import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';


const Header = ({ currentUser, hidden }) => {
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
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </div>
    )
};

// const mapStateToProps = ( { user: {currentUser}, cart: { hidden } }) => ({
    //  ---using selectors below
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
 
export default connect(mapStateToProps)(Header);