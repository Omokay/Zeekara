import React from 'react';
import CustomButton from '../../components/CustomButton/custom-button.component';
import CartItem from '../CartItem/cartItem.component';
import { selectCartItems } from '../../Redux/Cart/cart.selector';
import { connect } from 'react-redux';

import './cartDropdown.styles.scss';


const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
            <CustomButton>Checkout</CustomButton>
        </div>
    </div>
);

// Selector before memoization
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

// Using Memoization
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(Cart);