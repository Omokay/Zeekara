import React from 'react';
import './checkoutItems.styles.scss';


const CheckoutItem = ({ cartItem: { name, ImageUrl, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={ImageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-buttonn'>&#10062;</div>
    </div>
);

export default CheckoutItem;