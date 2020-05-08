import React from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../assets/original.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart.action';

import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingCartIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon); 