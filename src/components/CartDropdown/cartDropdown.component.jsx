import React from 'react';
import CustomButton from '../../components/CustomButton/custom-button.component';
import CartItem from '../CartItem/cartItem.component';
import { selectCartItems } from '../../Redux/Cart/cart.selector';
import { connect } from 'react-redux';

import './cartDropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

const Cart = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))): (
                    <span className='empty-message'>Your cart is empty</span>)
            }
            <CustomButton onClick={() => history.push('/checkout')}>Checkout</CustomButton>
        </div>
    </div>
);

// Selector before memoization
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// Using Memoization
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));