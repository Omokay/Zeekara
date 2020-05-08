import React from 'react';
import CustomButton from '../../components/CustomButton/custom-button.component';

import './cartDropdown.styles.scss';


const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>Checkout</CustomButton>
        </div>
    </div>
);


export default Cart;