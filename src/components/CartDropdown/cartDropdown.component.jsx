import React from 'react';
import CustomButton from '../../components/CustomButton/custom-button.component';
import CartItem from '../CartItem/cartItem.component';
import { connect } from 'react-redux';

import './cartDropdown.styles.scss';


const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem id={cartItem.id} item={cartItem} />
            ))}
            <CustomButton>Checkout</CustomButton>
        </div>
    </div>
);


const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);