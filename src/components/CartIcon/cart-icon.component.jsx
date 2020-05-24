import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/original.svg';
import { selectCartItemCount } from '../../Redux/Cart/cart.selector';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart.action';

import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingCartIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

// Looping through cart items and generating a count value
// generating count without the use of react selectors

// const mapStateToProps = ({ cart: { cartItems } }) => ({
// itemCount: cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)

// Generting count using react selectors ---START
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
});
//  ---- END

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 